var HobbyTeachingModal = React.createClass({
  render: function() {
    return (
      <div className="modal" style={this.props.modalDisplay}>
        <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
        <span className="left" onClick={this.props.changeImageLeftCallback}>&lt;</span>
        <span className="right" onClick={this.props.changeImageRightCallback}>&gt;</span>
        <img className="ht-modal-image" src={this.props.modalImages[this.props.currentModalImageIndex]} />
      </div>
    );
  }
});
