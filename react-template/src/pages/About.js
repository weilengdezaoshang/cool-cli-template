import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>关于</h1>
      <p>这是一个基于React构建的项目模板。</p>
      <p>特性包括：</p>
      <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
        <li>React 18</li>
        <li>React Router 路由管理</li>
        <li>React Context 状态管理</li>
        <li>自定义Hooks</li>
        <li>组件化开发</li>
      </ul>
    </div>
  );
}

export default About; 