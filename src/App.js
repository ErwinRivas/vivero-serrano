import React, { Component } from 'react'
import MenuNav from './components/MenuNav'
import { Router, Switch, Route } from 'react-router-dom'

//componentes
import Home from './pages/Home'
import Galery from './pages/Galery'
import ContacUs from './pages/ContacUs'
import News from './pages/News'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
import { createBrowserHistory } from 'history'

class App extends Component {
  render() {
    const History = createBrowserHistory();
    return (
      <Router history={History}>
        <div className="App">
          <MenuNav />
          <div className="content">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/servicios" component={Services} />
              <Route exact path="/noticias" component={News} />
              <Route exact path="/galeria" component={Galery} />
              <Route exact path="/contactenos" component={ContacUs} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
