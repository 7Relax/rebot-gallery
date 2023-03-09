import React, { useState } from "react"
import logo from './assets/images/logo.svg'
// 将css转换成对象，再通过访问对象的形式来获取样式
import style from './App.module.css'
import Robot from "./components/Robot"
import ShoppingCart from './components/ShoppingCart'

interface Props {
}

interface State {
  robotGallery: any,
  count: number,
}

// 函数式组件
const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <h1 className={style.headerFamily}>罗伯特机器人</h1>
      </div>

      <button onClick={() => {
        setCount(count + 1)
      }}>Click</button>
      <span> count: {count}</span>

      <ShoppingCart />

      {/* <div className={style.robotList}>
        { this.state.robotGallery.map(r =>
          <Robot id={r.id} name={r.name} email={r.email} key={r.id} />) }
      </div> */}

    </div>
  )
}

export default App
