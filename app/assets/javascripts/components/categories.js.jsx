var Categories = React.createClass({
  getInitialState: function() {
    return {categories: this.props.data};
  },

  render: function() {
    return (
      <ul>
        {this.state.categories.map(function(category) {
            return <li> <a href={"/categories/" + category.id}> {category.title} </a> </li>
          }.bind(this))}
      </ul>
    );
  }
});
