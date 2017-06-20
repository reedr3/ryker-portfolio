var Icon = React.createClass({

  render: function() {
    return (
      <a href={this.props.href} className={this.props.className}></a>
    );
  }
});
