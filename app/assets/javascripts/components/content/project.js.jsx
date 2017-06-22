var Project = React.createClass({
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
      <div className="project">
        <h1> {this.props.title} </h1>
        <ImageWithModal showModalCallback={this.showModal} image={this.props.modalImages[0]} />
        <div className="external-links">
          <a href={this.props.github}> Github Repo</a>
          <a href={this.props.liveApp}> {this.props.liveAppName} </a>
        </div>

        <ProjectModal
          modalImages={this.props.modalImages}
          modalDisplay={this.state.modalDisplay}
          currentModalImageIndex={this.state.currentModalImageIndex}
          closeModalCallback={this.closeModal}
          changeImageLeftCallback={this.changeImageLeft}
          changeImageRightCallback={this.changeImageRight}
          title={this.props.title}
          description={this.props.description}
          skills={this.props.skills}
          imageCaptions={this.props.imageCaptions}
        />
      </div>
    );
  }
});
