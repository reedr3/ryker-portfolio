var Block = React.createClass({
  getInitialState: function() {
    return {block: this.props.block};
  },

  render: function() {
    return (
      <div id="block">
        <p>{this.state.block.header}</p>
        <p>{this.state.block.image}</p>
        <p>{this.state.block.description}</p>
      </div>
    );
  }
});
