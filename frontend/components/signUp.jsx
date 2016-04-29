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
        <div className="form-group">
          <label className="username">
            Username:
          </label>
          <input type="text" className="form-control" valueLink={this.linkState('username')} />
        </div>

        <div className="form-group">
          <label className="email">
            E-mail:
          </label>
           <input type="text" className="form-control" valueLink={this.linkState('email')} />
        </div>

        <div className="form-group">
          <label className="password">
            Password:
          </label>
        <input type="password" className="form-control" valueLink={this.linkState('password')} />
        </div>

        <button onClick={this.createUser}>Sign Up</button>

      </form>
    );
  }

});

module.exports = SignUp;
