var Navbar = React.createClass({
  render: function() {
    return (
      <nav id="nav">
        <ul>
          {this.props.categories.map(function(category) {
              return <li> <a href={"/categories/" + category.id}> {category.title} </a> </li>
            }.bind(this))}
        </ul>
      </nav>
    );
  }
});
