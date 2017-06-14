var Logo = React.createClass({
  getInitialState: function() {
    return {image: this.props.data};
  },

  render: function() {
    return (
      <div> <img id="logo" src="https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg" /> </div>
    );
  }
});
