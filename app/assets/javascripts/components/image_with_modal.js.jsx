var ImageWithModal = React.createClass({
  render: function() {
    return (
      <img className="myImg" onClick={this.props.showModalCallback} src={this.props.image} />
    );
  }
});
