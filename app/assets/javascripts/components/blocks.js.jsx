var Blocks = React.createClass({
  getInitialState: function() {
    return {blocks: this.props.data};
  },

  render: function() {
    return (
      <div id="blocks">
        <ul>
          {this.state.blocks.map(function(block) {
              return <Block block={block} key={block.id} />
            }.bind(this))}
        </ul>
      </div>
    );
  }
});
