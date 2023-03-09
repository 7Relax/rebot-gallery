import React, { useContext } from "react"
import style from './Robot.module.css'
import { appContext } from '../AppState'
import { withAddToCart } from './AddToCart'

interface RobotProps {
  id: number
  name: string
  email: string
  addToCart: (id, name) => void
}

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  const contextValue = useContext(appContext)

  return (
    <div className={style.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}}`}></img>
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{contextValue.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  )
}

export default withAddToCart(RobotDiscount)
