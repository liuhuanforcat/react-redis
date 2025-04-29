import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './index.less';
import { Outlet, useNavigate } from 'react-router-dom';
import { generateMenuItems } from '../utils';
import routes from '../routers/routers';
const { Header, Content, Footer, Sider } = Layout;
const index: React.FC = () => {
  const navigate = useNavigate();
  // 处理菜单点击
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const menuItems = generateMenuItems(routes.find(r => r.path === '/')?.children || []);

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo-img" />
        <div className='logo-title'>react-redis-test</div>
      </Header>
      <div style={{ margin: '0 auto', width: 'calc(100% - 32px)' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} className='layout-sider'>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              onClick={handleMenuClick}
              items={menuItems}
            />
          </Sider>
          <Content className='layout-content'>
            <Outlet />
          </Content>
        </Layout>
      </div>
      <Footer className='layout-footer'>
        react-redis-test ©{new Date().getFullYear()} Created by LIUHUAN
      </Footer>
    </Layout>
  );
};

export default index;