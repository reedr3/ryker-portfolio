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
        <ImageWithModal showModalCallback={this.showModal} image={this.props.modalImages[0]} />
        <div className="external-links">
          <a href={this.props.github}> Github Repo</a>
          <a href={this.props.liveApp}> {this.props.liveAppName} </a>
        </div>

        <ProjectModal modalDisplay={this.state.modalDisplay} closeModalCallback={this.closeModal} title={this.props.title} modalImages={this.props.modalImages} description={this.props.description} skills={this.props.skills} />
      </div>
    );
  }
});
