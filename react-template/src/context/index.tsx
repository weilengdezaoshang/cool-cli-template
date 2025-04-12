import React, { createContext, useContext, useState, ReactNode } from 'react';

// 定义上下文类型
interface AppContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// 定义Provider Props类型
interface AppProviderProps {
  children: ReactNode;
}

// 创建上下文
const AppContext = createContext<AppContextType | undefined>(undefined);

// 创建上下文提供者组件
export function AppProvider({ children }: AppProviderProps) {
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
export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
} 