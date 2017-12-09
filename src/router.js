import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import 'antd-mobile/dist/antd-mobile.css';
import IndexPage from './routes/IndexPage';
import MyMobile from './routes/MyMobile';
import ButtonExample from './components/ButtonExample';
import CardExample from './components/CardExample';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="/welcome" component={MyMobile}/>
        <Route path="/button" component={ButtonExample}/>
        <Route path="/card" component={CardExample}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
