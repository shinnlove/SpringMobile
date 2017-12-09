import React from 'react';
import { connect } from 'dva';

function MyMobile() {
  return (
    <div>这是ant-mobile欢迎界面</div>
  );
}

MyMobile.propTypes = {
};

export default connect()(MyMobile);
