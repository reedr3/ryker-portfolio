var HobbyTeaching = React.createClass({
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
      <div className="hobby-teaching">
        <h1> {this.props.title} </h1>
        <ImageWithModal showModalCallback={this.showModal} image={this.props.modalImages[0]} />
        <div className="ht-description"> <p> {this.props.description} </p> </div>
        <HobbyTeachingModal modalDisplay={this.state.modalDisplay} closeModalCallback={this.closeModal} modalImages={this.props.modalImages} />
      </div>
    );
  }
});
