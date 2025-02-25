// Home组件的样式文件，将在./index.js中被引用
import styled from 'styled-components'
// 引入组件全局样式, 并使用styled-components生成样式
import style from '../../assets/global-style'

// 顶栏样式
export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};

  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;

    &.iconfont {
      font-size: 25px;
    }
  }
`
// 标签栏样式
export const Tab = styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${style["theme-color"]};

  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;

    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`
// 标签样式
export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`