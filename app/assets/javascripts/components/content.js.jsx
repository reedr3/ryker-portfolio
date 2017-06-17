var Content = React.createClass({
  render: function() {
    if(this.props.category.id == 1) {
      return (
        <main id="content">
          <RightButton url="/categories/2" />
          <div className="container">
            <About />
          </div>
        </main>
      );
    }
    else if(this.props.category.id == 2) {
      return (
        <main id="content">
          <LeftButton url="/categories/1" />
          <RightButton url="/categories/3" />
          <div className="container">
            <Projects />
          </div>
        </main>
      );
    }
    else if(this.props.category.id == 3) {
      return (
        <main id="content">
          <LeftButton url="/categories/2" />
          <RightButton url="/categories/4" />
          <div className="container">
            <TeachingExperiences />
          </div>
        </main>
      );
    }
    else if(this.props.category.id == 4) {
      return (
        <main id="content">
          <LeftButton url="/categories/3" />
          <RightButton url="/categories/5" />
          <div className="container">
            <Publications />
        </div>
        </main>
      );
    }
    else if(this.props.category.id == 5) {
      return (
        <main id="content">
          <LeftButton url="/categories/4" />
          <RightButton url="/categories/6" />
          <div className="container">
            <Hobbies />
          </div>
        </main>
      );
    }
    else if(this.props.category.id == 6) {
      return (
        <main id="content">
          <LeftButton url="/categories/5" />
          <div className="container">
            <Contact />
          </div>
        </main>
      );
    }
    else {
      return (
        <main id="content">
          <div className="container">
            <p>Something went wrong.</p>
          </div>
        </main>
      );
    }
  }
});
