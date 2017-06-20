var Modal = React.createClass({
  render: function() {
    return (
      <div className="modal" style={this.props.modalDisplay}>
        <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
        <h2 className="modal-title"> {this.props.title} </h2>
        <img className="modal-image" src={this.props.image} />
        <div className="modal-text"> {this.props.description} </div>
        <div className="modal-skills">
          <p>React</p>
          <p>Rails</p>
          <p>Ruby</p>
          <p>Ruby</p>
          <p>Ruby</p>
        </div>
      </div>
    );
  }
});
