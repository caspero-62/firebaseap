import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import SignIn from './Conponents/auth/SignIn.component';
import SignUp from './Conponents/auth/SignUp.component';
import Dashboard from './Conponents/dashboard/Dashboard.component';
import Navbar from './Conponents/layout/Navbar.component';
import CreateProject from './Conponents/projects/CreateProject.component';
import ProjectDetails from './Conponents/projects/ProjectDetails.component';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
