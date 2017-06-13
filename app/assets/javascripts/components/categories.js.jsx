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
        <p>github and linkedin and fb etc links go here</p>
        <a href="https://www.facebook.com/rebecca.reed.5667" className="fa fa-facebook"></a>
      </div>
    );
  }
});
