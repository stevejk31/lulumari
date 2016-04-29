var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var SignUp = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      username: "",
      email: "",
      password: "",
      buyer: false
    };
  },
  createUser: function() {
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.password);

  },

  render: function() {
    return (
      <form id="signup">
        <h2>Sign Up</h2>
        Username:<input type="text" valueLink={this.linkState('username')} />
        <br/>
        E-mail: <input type="text" valueLink={this.linkState('email')} />
        <br/>
        Password: <input type="password" valueLink={this.linkState('password')} />
        <br/>
        <button onClick={this.createUser}>Sign Up</button>
      </form>
    );
  }

});

module.exports = SignUp;
