import React, { Component } from 'react'
import MenuNav from './components/MenuNavegacion/MenuNav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './app.css'

//componentes
import Home from './pages/Home'
import Galery from './pages/Galery'
import ContacUs from './pages/ContacUs'
import News from './pages/News'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
import Posible1 from './pages/Posible1'
import Posible2 from './pages/Posible2'
import Posible3 from './pages/Posible3'
import Posible4 from './pages/Posible4'
import HeaderRedes from './components/HeaderRedes'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
          <HeaderRedes />
          <MenuNav />
          <Switch>
            <Route exact path="/vivero-serrano"><Home /></Route>
            <Route path="/servicios" component={Services} />
            <Route path="/noticias" component={News} />
            <Route exact path="/galeria" component={Galery} />
            <Route exact path="/contactenos" component={ContacUs} />
            <Route exact path="/galeria/posible1" component={Posible1} />
            <Route exact path="/galeria/posible2" component={Posible2} />
            <Route exact path="/galeria/posible3" component={Posible3} />
            <Route exact path="/galeria/posible4" component={Posible4} />
            <Route component={NotFound} />
          </Switch>
          <Footer/>
      </Router>
    )
  }
}

export default App;
