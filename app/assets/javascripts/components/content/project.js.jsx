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
      <div className="project">
        <h1> {this.props.title} </h1>
        <ImageWithModal showModalCallback={this.showModal} image={this.props.image} />
        <div className="external-links">
          <a href={this.props.github}> Github Repo</a>
          <a href={this.props.liveApp}> {this.props.liveAppName} </a>
        </div>

        <ProjectModal modalDisplay={this.state.modalDisplay} closeModalCallback={this.closeModal} title={this.props.title} image={this.props.image} description={this.props.description} />
      </div>
    );
  }
});
