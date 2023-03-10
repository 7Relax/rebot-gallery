import React, { useState, useEffect } from "react"
import logo from './assets/images/logo.svg'
// 将css转换成对象，再通过访问对象的形式来获取样式
import style from './App.module.css'
import Robot from "./components/Robot"
import RobotDiscount from "./components/RobotDiscount"
import ShoppingCart from './components/ShoppingCart'

interface Props {
  username: string
}

// 函数式组件
const App: React.FC<Props>= (props) => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    document.title = `点击${count}次`
  }, [count])

  // 第二个参数是个空数组则代码在模拟类组件中的 componentDidMount
  // 也就是只会在组件第一次渲染的时候调用，这种操作最适合获取数据初始化state
  // 如果不传第二个参数，它的副作用代码在每次页面渲染UI以后都会被执行一次
  // 而setRobotGallery又会更新robotGallery，UI组件会再次渲染，再次执行useEffect的副作用代码...
  // 所以不传第二个参数，则相当于在模拟 componentDidUpdate -> 即每次渲染结束后都会被调用
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setRobotGallery(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData() // 调用
  }, [])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => setRobotGallery(data))
  // }, [])

  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <h1 className={style.headerFamily}>罗伯特机器人</h1>
      </div>

      <h2>{props.username}</h2>

      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click
      </button>
      <span> count: {count}</span>

      <ShoppingCart />

      { (error !== '') && <div>网站出错：{error}</div> }

      {
        !loading ?
        <div className={style.robotList}>
          {
            robotGallery.map((r, index) =>
              index % 2 === 0 ?
              <RobotDiscount id={r.id} name={r.name} email={r.email} key={r.id} />
              : <Robot id={r.id} name={r.name} email={r.email} key={r.id} />
            )
          }
        </div>
        : <h2>loading 加载中</h2>
      }

    </div>
  )
}

export default App
