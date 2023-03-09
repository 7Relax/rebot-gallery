import React from "react"
import logo from './assets/images/logo.svg'
// 将css转换成对象，再通过访问对象的形式来获取样式
import style from './App.module.css'
import robots from './mockdata/robots.json'
import Robot from "./components/Robot"
import ShoppingCart from './components/ShoppingCart'

interface Props {
}

interface State {
  robotGallery: any
}

// 把函数式组件转成类组件，为了学习React组件的生命周期的相关知识
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: []
    }
  }

  // DOM元素被挂载后时执行
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ robotGallery: data }))
  }

  render() {
    return <div className={style.app}>

      <div className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <h1 className={style.headerFamily}>罗伯特机器人</h1>
      </div>

      <ShoppingCart />

      <div className={style.robotList}>
        { this.state.robotGallery.map(r =>
          <Robot id={r.id} name={r.name} email={r.email} key={r.id} />) }
      </div>

    </div>
  }
}

export default App
