import React, { useState } from 'react'

interface AppStateValue {
  username: string
  shoppingCart: {
    items: { id: number; name: string }[]
  }
}

const defaultContextValue: AppStateValue = {
  username: 'context-seven',
  shoppingCart: { items: [] }
}

// 上下文关系对象
export const appContext = React.createContext(defaultContextValue)

export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined)

// Provider 组件化
export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue)
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        { props.children }
      </appSetStateContext.Provider>
    </appContext.Provider>
  )
}
