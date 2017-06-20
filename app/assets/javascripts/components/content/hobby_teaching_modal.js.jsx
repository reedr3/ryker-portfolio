var HobbyTeachingModal = React.createClass({
  render: function() {
    return (
      <div className="modal" style={this.props.modalDisplay}>
        <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
        <img className="ht-modal-image" src={this.props.image} />
      </div>
    );
  }
});
