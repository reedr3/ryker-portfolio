var ProjectModal = React.createClass({
  render: function() {
    // if there's more than one modal image, display left and right buttons
    if (this.props.modalImages.length > 1) {
      return (
        <div className="modal" style={this.props.modalDisplay}>
          <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
          <span className="left" onClick={this.props.changeImageLeftCallback}>&lt;</span>
          <span className="right" onClick={this.props.changeImageRightCallback}>&gt;</span>
          <h2 className="p-modal-title"> {this.props.title} </h2>
          <img className="p-modal-image" src={this.props.modalImages[this.props.currentModalImageIndex]} />
          <div className="p-modal-image-caption"> {this.props.imageCaptions[this.props.currentModalImageIndex]} </div>
          <div className="p-modal-text"> {this.props.description} </div>
          <div className="p-modal-skills">
            {this.props.skills.map(function(skill) {
              return <p> {skill} </p>
            }.bind(this))}
          </div>
        </div>
      );
    }
    // if there's only one modal image, don't display left and right buttons
    else if (this.props.modalImages.length == 1) {
      return (
        <div className="modal" style={this.props.modalDisplay}>
          <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
          <h2 className="p-modal-title"> {this.props.title} </h2>
          <img className="p-modal-image" src={this.props.modalImages[this.props.currentModalImageIndex]} />
          <div className="p-modal-image-caption"> {this.props.imageCaptions[this.props.currentModalImageIndex]} </div>
          <div className="p-modal-text"> {this.props.description} </div>
          <div className="p-modal-skills">
            {this.props.skills.map(function(skill) {
              return <p> {skill} </p>
            }.bind(this))}
          </div>
        </div>
      );
    }
  }
});
