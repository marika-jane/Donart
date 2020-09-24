import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Signin from './SignIn'
import Register from './Register'
import Nav from './Nav'

const App = () => {
  return (
    <div className="App has-background-light">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/register" component={Register} />
    </div>
  )
}

export default App
