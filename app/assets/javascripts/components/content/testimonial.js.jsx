var Testimonial = React.createClass({
  render: function() {
    return (
      <div className="testimonial">
        <p> {this.props.dialog} </p>
        <img src={this.props.headshot} />
        <h3> {this.props.name} </h3>
      </div>
    );
  }
});
