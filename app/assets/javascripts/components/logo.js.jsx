var Logo = React.createClass({
  getInitialState: function() {
    return {image: this.props.data};
  },

  render: function() {
    return (
      <div> <img id="logo" src="https://vignette2.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003" /> </div>
    );
  }
});
