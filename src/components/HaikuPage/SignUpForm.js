import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss'

export default class SignUpForm extends Component {
state = {
  author: '',
  phone: '',
  password: '',
  confirm: '',
  consent: '',
  error: ''
};

handleChange = (evt) => {
  this.setState({
    [evt.target.name]: evt.target.value,
    error: ''
  });
};

handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
    const formData = {...this.state};
    delete formData.confirm;
    delete formData.error;
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await signUp(formData);
    // Baby step
    this.props.setUser(user);
  } catch {
    // An error happened on the server
    this.setState({ error: 'Sign Up Failed - Try Again' });
  }
};

// We must override the render method
// The render method is the equivalent to a function-based component
// (its job is to return the UI)
render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <div>
      <div className={styles.container}>
        <form className={styles.form}autoComplete="off" onSubmit={this.handleSubmit}>
          <label>Name, herin author.</label>
          <input className={styles.input}type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
        <label>Phone</label>
          <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Enter your phone number" required />
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          <input type="checkbox" name="consent" value={this.state.consent} onChange={this.handleChange}/>
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className={styles.ErrorMessage}>&nbsp;{this.state.error}</p>
    </div>
  );
}
}