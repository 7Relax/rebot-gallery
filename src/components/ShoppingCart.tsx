import React from 'react'
import style from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'

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
    // this.handleClick = this.handleClick.bind(this)
  }

  // 可以开启 any 类型自动映射: "noImplicitAny": false
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // 这里面的 this 要注意并不是指 ShoppingCart 实例，而是指向 handleClick
    // 所以这里的解决办法就是用 箭头函数 或者调用时用 bind 指定 this
    // 如：this.handleClick.bind(this)

    console.log('e.target', e.target)               // e.target: 描述事件发生的元素
    console.log('e.currentTarget', e.currentTarget) // e.currentTarget: 描述事件绑定的元素
    // 类型转换后再做判断
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  // 渲染 html
  render() {
    return (
      <div className={style.cartContainer}>
        <button
          className={style.button}
          onClick={this.handleClick}
        >
          <FiShoppingCart />
          <span>购物车 2 (件)</span>
        </button>

        <div
          className={style.cartDropDown}
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
