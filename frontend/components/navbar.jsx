var React = require('react');
var User = require('./User.jsx');


var NavBar = React.createClass({

  render: function() {
    return (
      <div id="navbar">
        navbar
        <User/>
      </div>
    );
  }

});

module.exports = NavBar;
