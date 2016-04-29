var React = require('react');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

// var appElement = document.getElementById('"signup-modal"');
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
//
// var WithLink = React.createClass({
//   getInitialState: function() {
//     return {message: 'Hello!'};
//   },
//   render: function() {
//     return <input type="text" valueLink={this.linkState('message')} />;
//   }
// });
var User = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      modalIsOpen: false,
      username: "",
      email: "",
      password: "",
      buyer: false
    };
  },

  componentWillMount() {
       Modal.setAppElement('body');
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  createUser: function() {
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.password);

  },

  render: function() {
    return (
      <div className="signup">
        <button onClick={this.openModal}>Sign Up</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <h2>Sign Up</h2>
          Username:<input type="text" valueLink={this.linkState('username')} />
          <br/>
          E-mail: <input type="text" valueLink={this.linkState('email')} />
          <br/>
          Password: <input type="password" valueLink={this.linkState('password')} />
          <br/>
          <button onClick={this.createUser}>Sign Up</button>

        </Modal>
      </div>
    );
  }

});

module.exports = User;
