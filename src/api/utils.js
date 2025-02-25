import {RankTypes} from "./constant";


// getCount函数，是一个工具函数，用于给播放量等数字增加单位，将用在推荐列表等多个组件中
export const getCount = (count) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

// 防抖函数
export const debounce = (func, delay) => {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timer)
    }, delay)
  }
}


//处理数据，找出第一个没有歌名的排行榜的索引，即全球榜的开头位置
export const filterIndex = rankList => {
  for (let i = 0; i < rankList.length - 1; i++) {
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1;
    }
  }
};

//找出排行榜的编号
export const filterIdx = name => {
  for (let key in RankTypes) {
    if (RankTypes[key] === name) return key;
  }
  return null;
};

// 处理歌手列表拼接歌手名字
export const getName = list => {
  let str = "";
  list.map((item, index) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};

export const isEmptyObject = obj => !obj || Object.keys(obj).length === 0;


// 给 css3 相关属性增加浏览器前缀，处理浏览器兼容性问题
let elementStyle = document.createElement("div").style;

let vendor = (() => {
  // 首先通过 transition 属性判断是何种浏览器
  let transformNames = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransfrom",
    ms: "msTransform",
    standard: "Transform"
  };
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }
  return false;
})();

export function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }
  if (vendor === "standard") {
    return style;
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

// 拼接歌曲url
export const getSongUrl = id => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

// 格式化播放时间
export const formatPlayTime = interval => {
  interval = interval | 0;// |0表示向下取整
  const minute = (interval / 60) | 0;
  const second = (interval % 60).toString().padStart(2, "0");
  return `${minute}:${second}`;
};

// 获取当前歌曲在播放列表中的下标
export const findIndex = (song, list) => {
  return list.findIndex(item=>{
    return song.id === item.id;
  })
}

// 随机播放算法: Fisher–Yates shuffle 洗牌算法
const getRandomInt = (min, max) => {
  let range = max - min;
  let rand = Math.random();
  return (min + Math.floor(range * rand));
}

export const shuffle = (list) => {
  const new_arr = [];
  list.forEach((item) => {
    new_arr.push(item);
  });
  for (let i = 0; i < list.length; i ++ ){
    let j = getRandomInt(0, i);
    [new_arr[j], new_arr[i]] = [new_arr[i], new_arr[j]]
  }
  return new_arr;
}