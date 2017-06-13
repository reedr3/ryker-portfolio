var Categories = React.createClass({
  getInitialState: function() {
    return {categories: this.props.data};
  },

  render: function() {
    return (
      <div id="categories">
        <ul>
          {this.state.categories.map(function(category) {
              return <li> <a href={"/categories/" + category.id}> {category.title} </a> </li>
            }.bind(this))}
        </ul>
        <Icon href="https://www.linkedin.com/in/ryker-reed/" className="fa fa-linkedin"/>
        <Icon href="https://github.com/reedr3" className="fa fa-github"/>
        <Icon href="https://www.facebook.com/rebecca.reed.5667" className="fa fa-facebook"/>
      </div>
    );
  }
});
