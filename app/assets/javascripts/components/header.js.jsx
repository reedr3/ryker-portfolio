var Header = React.createClass({
  render: function() {
    return (
      <header id="header">
        <div className="container">
          <Logo />
          <Navbar categories={this.props.categories} />
        </div>
      </header>
    );
  }
});
