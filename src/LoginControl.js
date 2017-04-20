import React from 'react';
import { Alert } from 'reactstrap';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages || [];
  const listItems = unreadMessages.map((unreadMessage, index) =>
                      <li key={index}>{unreadMessage}</li>
                    );

  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <div>
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            <ul>{listItems}</ul>
        </div>
      }
    </div>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitUserRegistration = this.handleSubmitUserRegistration.bind(this);
    this.onDismiss = this.onDismiss.bind(this);

    this.state = {isLoggedIn: false, username: '', isRegistered: false, alertVisible: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmitUserRegistration(event){
    event.preventDefault();
    this.setState({ isRegistered: true, alertVisible: true });
  }

  onDismiss() {
    this.setState({ alertVisible: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let unreadMessages = [];

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      unreadMessages = ['Test01','Test02'];
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn &&
            <form onSubmit={this.handleSubmitUserRegistration}>
                <label>
                    Username:
                    <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange}/>
                </label>
                <p>You are typing username {this.state.username}.</p>
                <button type="submit">Register</button>
                <Alert color="success" isOpen={this.state.alertVisible} toggle={this.onDismiss}>
                    <strong>Well done!</strong> You successfully regsitered using username {this.state.username}.
                </Alert>
            </form>
        }
        <Mailbox unreadMessages={unreadMessages}/>
        {button}
      </div>
    );
  }
}

export default LoginControl;
