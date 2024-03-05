import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';

const { Sider, Content } = Layout;

export const MainLayout = ({ children }) => {
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  
    return (
      // <Router>
        <Layout style={{ height: '100vh'}}>
          <Sider hidden={false}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to='/ingresar'>
                  Ingresar
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to='/cola'>
                  Cola de tickets
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to='/crear'>
                  Crear ticket
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              { children }
            </Content>
          </Layout>
        </Layout>
      // </Router>
    );
};

MainLayout.propTypes = {
  children: PropTypes.any,
}