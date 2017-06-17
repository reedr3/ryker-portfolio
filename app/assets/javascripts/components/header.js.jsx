var Header = React.createClass({
  render: function() {
    return (
      <header id="header">
        <div className="container">
          <Logo />
          <Navbar categories={this.props.categories} category={this.props.category} />
        </div>
      </header>
    );
  }
});
