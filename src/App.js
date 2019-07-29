import React from 'react'
import { Router } from '@reach/router'
import Contact from './pages/Contact/Contact'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp'
import './App.css'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Router>
          <HomePage path='/' />
          <ShopPage path='/shop' />
          <Contact path='/contact' />
          <SignInAndSignUpPage path='/signin' />
        </Router>
      </div>
    )
  }
}

export default App
