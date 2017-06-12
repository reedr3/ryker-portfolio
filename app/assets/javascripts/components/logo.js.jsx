var Logo = React.createClass({
  getInitialState: function() {
    return {image: this.props.data};
  },

  render: function() {
    return (
      <div> <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Classic_alphabet_r_at_coloring-pages-for-kids-boys-dotcom.svg/1000px-Classic_alphabet_r_at_coloring-pages-for-kids-boys-dotcom.svg.png" /> </div>
    );
  }
});
