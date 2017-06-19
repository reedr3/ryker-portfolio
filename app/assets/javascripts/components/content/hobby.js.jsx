var Hobby = React.createClass({
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
      <div>
        <h1>I'm a hobby!</h1>
        <img id="myImg" onClick={this.showModal} src="https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg" alt="test image for modal test" width="300" height="200" />

        <div id="myModal" className="modal" style={this.state.modalDisplay}>
          <span className="close" onClick={this.closeModal}>I'm the freaking close button</span>
          <img className="modal-content" id="img01" src="https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg"/>
          <div id="caption">This is a caption</div>
        </div>
      </div>
    );
  }
});
