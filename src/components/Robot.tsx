import React, { useContext } from "react"
import style from './Robot.module.css'
import { appContext } from '../index'

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
  return (
    <div className={style.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}}`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{contextValue.username}</p>
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
