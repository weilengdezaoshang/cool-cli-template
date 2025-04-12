import React from 'react';
import { useAppContext } from '../context';

const Home: React.FC = () => {
  const { count, increment, decrement } = useAppContext();

  return (
    <div className="home">
      <h1>Cool UI React 模板</h1>
      <p>欢迎使用 Cool UI React 项目模板！</p>
      
      <div className="counter">
        <h2>React Context 状态管理示例</h2>
        <p>当前计数: {count}</p>
        <button onClick={increment}>增加</button>
        <button onClick={decrement}>减少</button>
      </div>
    </div>
  );
};

export default Home; 