var React = require('react');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SignUp = require('./signUp.jsx')


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
      <div className="signup">
        <button onClick={this.openModal}>Sign Up</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <SignUp/>

        </Modal>
      </div>
    );
  }

});

module.exports = User;
