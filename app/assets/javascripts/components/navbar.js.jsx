var Navbar = React.createClass({
  isCurrentCategory: function(category) {
    if(this.props.category.id == category.id) {
      return ("current-category");
    }
    else {
      return ("not-current-category");
    }
  },

  render: function() {
    return (
      <nav id="nav">
        <ul>
          {this.props.categories.map(function(category) {
              return <li> <a className={this.isCurrentCategory(category)} href={"/categories/" + category.id}> {category.title} </a> </li>
            }.bind(this))}
        </ul>
      </nav>
    );
  }
});
