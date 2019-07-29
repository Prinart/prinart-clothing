import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className='sign-up'>
        <h2>I don't have an account.</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='name'
            label='Display Name'
            handleChange={this.handleChange}
            value={this.state.name}
            required
          />
          <FormInput
            type='email'
            name='email'
            label='Email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <FormInput
            type='confirmPassword'
            name='confirmPassword'
            label='Confirm Password'
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            required
          />
          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    )
  }
}

export default SignUp
