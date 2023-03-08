import React from "react"
import logo from './assets/images/logo.svg'
// 将css转换成对象，再通过访问对象的形式来获取样式
import style from './App.module.css'
import robots from "./mockdata/robots.json"
import Robot from "./components/Robot"

function App() {
  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <h1 className={style.headerFamily}>罗伯特机器人</h1>
      </div>
      <div className={style.robotList}>
        {robots.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
      </div>
    </div>
  )
}

export default App
