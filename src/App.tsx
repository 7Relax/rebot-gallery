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
  robotGallery: any,
  count: number,
}

// 把函数式组件转成类组件，为了学习React组件的生命周期的相关知识
class App extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0, // 计数器
    }
  }

  // 在组件创建好DOM元素以后、挂载进页面的时候调用，只会在组件初始化时调用一次
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ robotGallery: data }))
  }

  render() {
    return (
      <div className={style.app}>
        <div className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="logo" />
          <h1 className={style.headerFamily}>罗伯特机器人</h1>
        </div>

        <button onClick={() => {

          this.setState((preState, preProps) => {
            return { count: preState.count + 1 }
          }, () => {
            console.log('count ',this.state.count)
          })

          this.setState((preState, preProps) => {
            return { count: preState.count + 1 }
          }, () => {
            console.log('count ',this.state.count)
          })

        }}>Click</button>
        <span> count: {this.state.count}</span>

        <ShoppingCart />

        <div className={style.robotList}>
          { this.state.robotGallery.map(r =>
            <Robot id={r.id} name={r.name} email={r.email} key={r.id} />) }
        </div>

      </div>
    )
  }
}

export default App
