import React, { useContext } from 'react'
import { appSetStateContext } from '../AppState'
import { RobotProps } from './Robot'

// 高阶组件 HOC
// 把 RobotProps 作为泛型传递给 React.ComponentType
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  // 可以返回一个匿名类组件
  // return class extends React.Component {}

  // 也可以返回一个匿名函数组件
  return (props) => {
    // 全局状态
    const setState = useContext(appSetStateContext)
    // 加入购物车
    const addToCart = (id, name) => {
      if (setState) { // 思考：如何简化这里的代码
        setState(state => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }]
            }
          }
        })
      }
    }
    // 处理withAddToCart这个高阶组件与子组件中的业务连接问题
    // 业务连接实际上就是数据传递，组件间的数据传递使用的就是props
    // 所以把addToCart通过子组件ChildComponent传递下去：
    return <ChildComponent {...props} addToCart={addToCart} />
  }
}

// 自定义 Hook
export const useAddToCart = () => {
  const setState = useContext(appSetStateContext)
  const addToCart = (id, name) => {
    if (setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }]
          }
        }
      })
    }
  }
  return addToCart
}
