import "./app.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Why from './WhyAnyWork/Why';
import How from './HowItWorks/How';
import SignIn_Up from './SignIn_Up/SignIn_Up';
import Contact from "./Contact/Contact";
import Support from "./Support/Support";
import GetJobs from "./GetJobs/GetJobs";
import PostJobs from "./PostJobs/PostJobs";
import Service from "./Service/Service";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={SignIn_Up} />
          <Route path='/sign-up' exact component={SignIn_Up} />
          <Route path='/why' component={Why} />
          <Route path='/how' component={How} />
          <Route path='/home' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/support' component={Support} />
          <Route path='/service' component={Service} />
          <Route path='/getjobs' component={GetJobs} />
          <Route path='/postjobs' component={PostJobs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;