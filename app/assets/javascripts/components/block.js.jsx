var Block = React.createClass({
  getInitialState: function() {
    return {block: this.props.block};
  },

  render: function() {
    var textAlignment = {textAlign: 'left'};
    var imgAlignment = {float: 'left'};
    if (this.state.block.id % 2 == 0) {
      textAlignment = {textAlign: 'right'};
      imgAlignment = {float: 'right'};
    }

    return (
      <div id="block">
        <p style={textAlignment}>{this.state.block.header}</p>
        <img style={imgAlignment} src={this.state.block.image} />
        <p style={textAlignment}>{this.state.block.description}</p>
      </div>
    );
  }
});
