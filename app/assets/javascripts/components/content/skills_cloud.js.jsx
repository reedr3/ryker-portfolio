var SkillsCloud = React.createClass({
  render: function() {
    return (
      <div>
        <div id="top-skills" className="skill-group">
          {this.props.topSkills.map(function(skillName) {
            return <p> {skillName} </p>
          }.bind(this))}
        </div>
        <div id="middle-skills" className="skill-group">
          {this.props.middleSkills.map(function(skillName) {
            return <p> {skillName} </p>
          }.bind(this))}
        </div>
        <div id="bottom-skills" className="skill-group">
          {this.props.bottomSkills.map(function(skillName) {
            return <p> {skillName} </p>
          }.bind(this))}
        </div>
      </div>
    );
  }
});
