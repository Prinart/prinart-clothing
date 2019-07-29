import React from 'react'
import Button from '../Button/Button'
import FormInput from '../FormInput/FormInput'
import './SignIn.styles.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.setState({ email: '', password: '' })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type='passowrd'
            name='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
