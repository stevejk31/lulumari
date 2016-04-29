var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var LogIn = React.createClass({
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
      <form id="login">
        <h2>Log In</h2>
        <div className="form-group">
          <label className="username">
            Username:
          </label>
          <input type="text" className="form-control" valueLink={this.linkState('username')} />
        </div>

        <div className="form-group">
          <label className="password">
            Password:
          </label>
        <input type="password" className="form-control" valueLink={this.linkState('password')} />
        </div>

        <button onClick={this.createUser}>Log In</button>

      </form>
    );
  }

});

module.exports = LogIn;
