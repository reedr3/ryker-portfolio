var HobbyTeaching = React.createClass({
  getInitialState: function() {
    return {modalDisplay: {display: "none"}, currentModalImageIndex: 0};
  },

  showModal: function() {
    var newState = this.state;
    newState.modalDisplay = {display: "block"};
    this.setState(newState);
  },

  closeModal: function() {
    var newState = this.state;
    newState.modalDisplay = {display: "none"};
    this.setState(newState);
  },

  changeImageLeft: function() {
    var newState = this.state;
    if (newState.currentModalImageIndex > 0) {
      newState.currentModalImageIndex = newState.currentModalImageIndex - 1;
    }
    else if (newState.currentModalImageIndex == 0) {
      newState.currentModalImageIndex = this.props.modalImages.length -1;
    }
    this.setState(newState);
  },

  changeImageRight: function() {
    var newState = this.state;
    if (newState.currentModalImageIndex < this.props.modalImages.length - 1) {
      newState.currentModalImageIndex = newState.currentModalImageIndex + 1;
    }
    else if (newState.currentModalImageIndex == this.props.modalImages.length - 1) {
      newState.currentModalImageIndex = 0;
    }
    this.setState(newState);
  },

  render: function() {
    return (
      <div className="hobby-teaching">
        <h1> {this.props.title} </h1>
        <ImageWithModal showModalCallback={this.showModal} image={this.props.modalImages[0]} />
        <div className="ht-description"> <p> {this.props.description} </p> </div>
        <HobbyTeachingModal
          modalImages={this.props.modalImages}
          modalDisplay={this.state.modalDisplay}
          currentModalImageIndex={this.state.currentModalImageIndex}
          closeModalCallback={this.closeModal}
          changeImageLeftCallback={this.changeImageLeft}
          changeImageRightCallback={this.changeImageRight}
        />
      </div>
    );
  }
});
