import "./app.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Why from './WhyAnyWork/Why';
import How from './HowItWorks/How';
import SignIn_Up from './SignIn_Up/SignIn_Up';
import Contact from "./Contact/Contact";

import Service from "./Service/Service";
import NewJob from "./GetJobs/NewJobs/NewJob";
import ActiveJob from "./GetJobs/Active/ActiveJob";
import CompleteJob from "./GetJobs/Complete/CompleteJob";
import Active from "./PostJobs/Active/Active";
import Complete from "./PostJobs/Complete/Complete";
import Form from "./PostJobs/Form/Form";
import ActiveBids from "./PostJobs/Bids/Bids";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' exact component={SignIn_Up} />
          <Route path='/why' component={Why} />
          <Route path='/how' component={How} />
          {/* <Route path='/home' component={Home} /> */}
          <Route path='/contact' component={Contact} />
          
          <Route path='/service' component={Service} />
          <Route path='/getjobs' component={NewJob} />
          <Route path='/postjobs' component={ActiveBids} />
          {/* <Route path='/get/newjobs' component={NewJob} /> */}
          <Route path='/get/activejobs' component={ActiveJob} />
          <Route path='/get/complete' component={CompleteJob} />
          <Route path='/post/active' component={Active} />
          <Route path='/post/add' component={Form} />
          <Route path='/post/complete' component={Complete} />
        </Switch>
      </Router>
    </>
  );
}

export default App;