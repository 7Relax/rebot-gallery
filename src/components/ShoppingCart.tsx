import React from 'react'
import style from './ShoppingCart.module.css'

interface Props {

}

interface State {
  isOpen: boolean
}

// Component 和 PureComponent 都是类组件，只是在组件的生命周期管理上略有不同
// P: 用于组件间的数组传递
// S: 组件自身的状态
// SS: 代表自定义数据，可在生命周期 getSnapshotBeforeUpdate 函数中使用，
// 可以通过这个函数在 UI 渲染之前就可以获取相应的一些 DOM 数据，如页面滑动位置 position 等等
class ShoppingCart extends React.Component<Props, State> {
  // 初始化 state
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  // 渲染 html
  render() {
    return (
      <div className={style.cartContainer}>
        <button
          className={style.button}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen })
          }}
        >购物车 2 (件)</button>

        <div className={style.cartDropDown}
          style={{ display: this.state.isOpen ? 'block' : 'none' }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default ShoppingCart
