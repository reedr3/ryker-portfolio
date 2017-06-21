var HobbyTeachingModal = React.createClass({
  getInitialState: function() {
    return {currentImageIndex: 0};
  },

  changeImageLeft: function() {
    var newState = this.state;
    if (newState.currentImageIndex > 0) {
      newState.currentImageIndex = newState.currentImageIndex - 1;
    }
    else if (newState.currentImageIndex == 0) {
      newState.currentImageIndex = this.props.modalImages.length -1;
    }
    this.setState(newState);
  },

  changeImageRight: function() {
    var newState = this.state;
    if (newState.currentImageIndex < this.props.modalImages.length - 1) {
      newState.currentImageIndex = newState.currentImageIndex + 1;
    }
    else if (newState.currentImageIndex == this.props.modalImages.length - 1) {
      newState.currentImageIndex = 0;
    }
    this.setState(newState);
  },

  render: function() {
    return (
      <div className="modal" style={this.props.modalDisplay}>
        <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
        <span className="left" onClick={this.changeImageLeft}>&lt;</span>
        <span className="right" onClick={this.changeImageRight}>&gt;</span>
        <img className="ht-modal-image" src={this.props.modalImages[this.state.currentImageIndex]} />
      </div>
    );
  }
});
