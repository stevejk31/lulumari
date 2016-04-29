var React = require('react');
var NavBar = require('./navbar.jsx')
var Footer = require('./footer.jsx')

var App = React.createClass({

  render: function() {
    return (
      <div id="wrapper">
        <NavBar/>
        <div id="content">
          hello
          {this.children}
        </div>
        <Footer/>
      </div>
    );
  }

});

module.exports =  App;
