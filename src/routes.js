import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Pomodoro from './components/Pomodoro/Timer';
import PomodoroHook from './components/Pomodoro/PomodoroHook';
import Numbers from './components/Numbers/Numbers';
import Person from './components/Person/Person';
import Calculator from './components/Calculator/Calculator';
import CalculatorHook from './components/Calculator/CalculatorHook';
import Create from './components/Create';
import User from './components/User/User';
import CreateUser from './components/CreateUser/CreateUser';
import Login from './components/Login';
import Error404 from './components/Error/404';
import AppHooks from './hooks/App';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pomodoro" component={Pomodoro} exact />
      <Route path="/pomodoroHook" component={PomodoroHook} exact />
      <Route path="/numbers" component={Numbers} exact />
      <Route path="/person" component={Person} exact />
      <Route path="/calculator" component={Calculator} exact />
      <Route path="/calculatorHook" component={CalculatorHook} exact />
      <Route path="/create" component={Create} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/hooks" component={AppHooks} exact />
      <Route path="/users" component={User} exact />
      <Route path="/users/create" component={CreateUser} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
