var React = require('react');
var User = require('./User.jsx');


var NavBar = React.createClass({

  render: function() {
    return (
      <ul id="navbar">
        <li>logo</li>
        <User/>
      </ul>
    );
  }

});

module.exports = NavBar;
