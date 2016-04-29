var React = require('react');
var SignUp = require('./signUp.jsx');


var NavBar = React.createClass({

  render: function() {
    return (
      <div id="navbar">
        navbar
        <SignUp/>
      </div>
    );
  }

});

module.exports = NavBar;
