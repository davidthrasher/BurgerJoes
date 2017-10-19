import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      padding: 50,
      zIndex: 99999
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 1000,
      minHeight: 300,
      maxHeight: 800,
      margin: '0 auto',
      padding: 30,
      zIndex: 99999,
      overflow:'auto'
    };

    return (
      <div className="modalBackdrop" style={backdropStyle}>
        <div className="modalBox" style={modalStyle}>
          {this.props.children}
          <div className="footer">
            <button onClick={this.props.actionHandler}>
              {this.props.btnText}
            </button>
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
