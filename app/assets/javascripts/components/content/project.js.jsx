var Project = React.createClass({
  render: function() {
    return (
      <div id="project">
        <h1> {this.props.title} </h1>
        <img src={this.props.image} />
        <ul>
          <li> <a href={this.props.github}> Github </a> </li>
          <li> <a href={this.props.liveApp}> {this.props.liveAppName} </a> </li>
        </ul>
        <p> {this.props.description} </p>
      </div>
    );
  }
});
