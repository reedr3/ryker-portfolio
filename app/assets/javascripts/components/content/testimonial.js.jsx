var Testimonial = React.createClass({
  render: function() {
    var textSide = this.props.textSide;
    if(textSide == "left") {
      return (
        <div className="testimonial">
          <div className="dialog">
            <p> {this.props.dialog} </p>
          </div>
          <div className="head-and-name">
            <a href={this.props.linkedin}> <img src={this.props.headshot}/> </a>
            <h3> {this.props.name} </h3>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="testimonial">
          <div className="head-and-name">
            <a href={this.props.linkedin}> <img src={this.props.headshot}/> </a>
            <h3> {this.props.name} </h3>
          </div>
          <div className="dialog">
            <p> {this.props.dialog} </p>
          </div>
        </div>
      );
    }
  }
});
