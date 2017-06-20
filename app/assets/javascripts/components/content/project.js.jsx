var Project = React.createClass({
  getInitialState: function() {
    return {modalDisplay: {display: "none"}};
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

  render: function() {
    return (
      <div id="project">
        <h1> {this.props.title} </h1>
        <img className="myImg" onClick={this.showModal} src={this.props.image} />
        <div className="external-links">
          <a href={this.props.github}> Github Repo</a>
          <a href={this.props.liveApp}> {this.props.liveAppName} </a>
        </div>

        <div className="modal" style={this.state.modalDisplay}>
          <span className="close" onClick={this.closeModal}>&times;</span>
          <h2> {this.props.title} </h2>
          <img className="modal-content" src={this.props.image} />
          <div className="caption"> {this.props.description} </div>
            <ul>
              <li> React </li>
              <li> Rails </li>
              <li> Ruby </li>
            </ul>
        </div>
      </div>
    );
  }
});
