import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

import CCAbout from './ClassCompents/CCAbout';
import CCHome from './ClassCompents/CCHome';
import CCStudent from './ClassCompents/CCStudent';
import FCHeader from './functioanlComp/FCHeader';

function App() {
  return (
    <div className="App">
      <FCHeader />
      <header className="App-header">
        <Switch>
          <Route exact path="/" >
            <CCHome />
          </Route>
          <Route path="/about">
            <CCAbout />
          </Route>
          <Route path="/student/:userId" >
            <CCStudent />
          </Route>
        </Switch>
      </header>
    </div >
  );
}

export default withRouter(App);
