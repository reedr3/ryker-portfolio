var ProjectModal = React.createClass({
  render: function() {
    // if displaying first modal image, show image and project description and skills
    if (this.props.currentModalImageIndex == 0) {
      return (
        <div className="modal" style={this.props.modalDisplay}>
          <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
          <span className="left" onClick={this.props.changeImageLeftCallback}>&lt;</span>
          <span className="right" onClick={this.props.changeImageRightCallback}>&gt;</span>
          <h2 className="p-modal-title"> {this.props.title} </h2>
          <img className="p-modal-image modal-logo" src={this.props.modalImages[this.props.currentModalImageIndex]} />
          <div className="p-modal-text"> {this.props.description} </div>
          <div className="p-modal-skills">
            {this.props.skills.map(function(skill) {
              return <p> {skill} </p>
            }.bind(this))}
          </div>
        </div>
      );
    }
    // for all other modal images, just display image and caption and skills
    else {
      return (
        <div className="modal" style={this.props.modalDisplay}>
          <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
          <span className="left" onClick={this.props.changeImageLeftCallback}>&lt;</span>
          <span className="right" onClick={this.props.changeImageRightCallback}>&gt;</span>
          <h2 className="p-modal-title"> {this.props.title} </h2>
          <img className="p-modal-image" src={this.props.modalImages[this.props.currentModalImageIndex]} />
          <div className="p-modal-image-caption"> {this.props.imageCaptions[this.props.currentModalImageIndex]} </div>
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
