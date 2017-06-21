var ProjectModal = React.createClass({
  render: function() {
    return (
      <div className="modal" style={this.props.modalDisplay}>
        <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
        <h2 className="p-modal-title"> {this.props.title} </h2>
        <img className="p-modal-image" src={this.props.image} />
        <div className="p-modal-text"> {this.props.description} </div>
        <div className="p-modal-skills">
          {this.props.skills.map(function(skill) {
              return <p> {skill} </p>
            }.bind(this))}
        </div>
      </div>
    );
  }
});
