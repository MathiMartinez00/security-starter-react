/*
  El diseño de este layout está basado en un ejemplo de la documentación de antd que se
  puede ver en el siguiente enlace: https://stackblitz.com/run?file=demo.tsx.
  
  Los principales cambios fueron que se adaptó ese código para que utilice TypeScript
  y no utilice createElement ya que es parte de una API legacy de React.
  El CSS utilizado por el ejemplo está en styles/index.css y es importado en _app.tsx
  para que funcione correctamente con Next.js.
*/

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='logo' />
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout className='site-layout'>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Trigger collapsed={collapsed} setCollapsed={setCollapsed} />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {
              // TODO: Por algún motivo parece que el color de la letra no cambia.
            }
            Content
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

function Trigger({ collapsed, setCollapsed }: { collapsed: boolean, setCollapsed: Function }) {
  if (collapsed) {
    return <MenuUnfoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
  }
  return <MenuFoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)}/>
}