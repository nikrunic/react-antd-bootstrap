import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Template.less';
import { Layout } from 'antd';
import Home from '../Pages/Home/Home';
import { HeaderPage } from '../Component/HeaderPage';
import { FooterPage } from '../Component/FooterPage';
// const { Item } = Menu;
const { Content } = Layout;

const Template = () => {
  return (
    <Layout className="rootLayout">
      <HeaderPage />
      <Content className="wrapper" >
        <Switch>
          <Route path="/home" render={(props) => <Home />} />
        </Switch>
      </Content>
      <FooterPage />
    </Layout>
  )
}

export default Template;
