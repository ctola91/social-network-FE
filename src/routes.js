import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Pomodoro from './components/Pomodoro/Timer';
import Numbers from './components/Numbers/Numbers';
import Person from './components/Person/Person';
import Calculator from './components/Calculator/Calculator';
import Error404 from './components/Error/404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pomodoro" component={Pomodoro} exact />
      <Route path="/numbers" component={Numbers} exact />
      <Route path="/person" component={Person} exact />
      <Route path="/calculator" component={Calculator} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
