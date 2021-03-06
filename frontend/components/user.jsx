var React = require('react');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SignUp = require('./signUp.jsx')
var LogIn = require('./LogIn.jsx')



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

var User = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      modalIsOpen: false,
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

  render: function() {
    return (
      <li className="signup">
        <button onClick={this.openModal}>User</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <button onClick={this.closeModal} className="close-modal">X</button>
          <SignUp/>
          <LogIn/>
        </Modal>
      </li>
    );
  }

});

module.exports = User;
