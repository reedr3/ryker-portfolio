var Testimonial = React.createClass({
  render: function() {
    return (
      <div className="testimonial">
        <p> {this.props.dialog} </p>
        <a href={this.props.linkedin}> <img src={this.props.headshot}/> </a>
        <h3> {this.props.name} </h3>
      </div>
    );
  }
});
