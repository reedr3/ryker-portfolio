var Icon = React.createClass({

  render: function() {
    return (
      <div className="icon"> <a href={this.props.href} className={this.props.className}></a> </div>
    );
  }
});
