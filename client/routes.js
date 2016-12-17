import React from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './components/App';
import Helloworld from './components/Helloworld';
import SignupPage from './components/signup/SignupPage';

export default(
  <Route path="/" component={App}>
      <IndexRoute component={Helloworld} />
      <Route path="signup" component={SignupPage} />
  </Route>
)
