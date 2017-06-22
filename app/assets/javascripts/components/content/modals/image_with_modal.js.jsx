var ImageWithModal = React.createClass({
  render: function() {
    return (
      <img className="image-with-modal" onClick={this.props.showModalCallback} src={this.props.image} />
    );
  }
});
