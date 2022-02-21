import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './components/Footer';
import Doctors from './pages/Doctors';
import Profile from './pages/Profile';
import News from './pages/News';
import About from './pages/About';
import Messages from './components/Message';
import Service from './pages/Service';
import ApptForm from './pages/ApptForm';
import ScrollToTop from './components/Scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1600,
      delay: 100,
    });
  })

  return (
    <>
      <Router>
        <Messages />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={() => <Home authorized={true} />} />
          <Route path="/doctor" exact component={Doctors} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/form" exact component={ApptForm}/>
          <Route path="/news" exact component={News}/>
          <Route path="/about" exact component={About}/>
          <Route path="/services" exact component={Service}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
