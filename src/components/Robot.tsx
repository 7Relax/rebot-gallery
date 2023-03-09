import React, { useContext } from "react"
import style from './Robot.module.css'
import { appContext, appSetStateContext } from '../AppState'

// 这个接口定义的数据 最终需要通过父组件传递给当前组件的数据
// 组件间的数据传递是通过 props
interface RobotProps {
  id: number
  name: string
  email: string
}

// 函数式组件 FC = functional component
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const contextValue = useContext(appContext)
  // 全局状态
  const setState = useContext(appSetStateContext)
  // 加入购物车
  const addToCart = () => {
    if (setState) { // 思考：如何简化这里的代码
      setState(state => {
        console.log(id, name, email, state.shoppingCart.items)
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }]
          }
        }
      })
    }
  }
  return (
    <div className={style.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}}`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{contextValue.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
    // <appContext.Consumer>
    //   {(value) => {
    //     return (
    //       <div className={style.cardContainer}>
    //         <img alt="robot" src={`https://robohash.org/${id}}`}></img>
    //         <h2>{name}</h2>
    //         <p>{email}</p>
    //         <p>作者：{value.username}</p>
    //       </div>
    //     )
    //   }}
    // </appContext.Consumer>
  )
}

export default Robot
