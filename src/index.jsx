import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import '../style/style.css';
const App = () => {

  return (
    <Router history={hashHistory}>
    {/* <Route path="/" component={login}/> */}
</Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
