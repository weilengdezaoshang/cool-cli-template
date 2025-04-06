import React, { createContext, useContext, useState } from 'react';

// 创建上下文
const AppContext = createContext();

// 创建上下文提供者组件
export function AppProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const value = {
    count,
    increment,
    decrement
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// 创建使用上下文的自定义Hook
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
} 