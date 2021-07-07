import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Testimonials from './components/testimonials';
import Services from './components/services';
import Calculator from './components/calculator';
import CaseStudy from './components/caseStudy';
import Articles from './components/articles';
import Contacts from './components/contacts';
import Footer from './components/footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutus' component={Testimonials} />
        <Route path='/services' component={Services} />
        <Route path='/home-loan-calculator' component={Calculator} />
        <Route path='/case-studies' component={CaseStudy} />
        <Route path='/articles' component={Articles} />
        <Route path='/contact-us' component={Contacts} />
        <Route render={() => <h1>404: Oops! That page can’t be found.</h1>} />
      </Switch>
      <Footer />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
