var Header = React.createClass({
  render: function() {
    return (
      <header id="header">
        <div className="container">
          <img id="logo" src="https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg" />
          <nav id="nav">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
});
