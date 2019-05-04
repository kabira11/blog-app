import React, { Component } from 'react';
import Home from './component/Home'
import HomeClass from './component/HomeClass'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { BrowserRouter , Route , Switch } from 'react-router-dom'
import Post from './component/Post';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path = "/" component = {HomeClass}/>
        <Route path = "/About" component = {About}/>
        <Route path = "/Contact" component = {Contact}/>
        <Route path = "/:post_id" component = {Post} />
        </Switch>
        {/* <Footer /> */}
        {/* <Home />
        <About />
        <Contact /> */}
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
