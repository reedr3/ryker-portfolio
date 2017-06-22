var PublicationModal = React.createClass({
  render: function() {
    return (
      <div className="modal" style={this.props.modalDisplay}>
        <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
        <h2 className="p-modal-title"> {this.props.title} </h2>
        <img className="pub-modal-image" src={this.props.image} />
        <div className="p-modal-image-caption"> {this.props.imageCaption} </div>  
      </div>
    );
  }
});
