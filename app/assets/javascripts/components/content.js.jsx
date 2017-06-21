var Content = React.createClass({
  whichCategory: function(categoryId) {
    var categoryComponents = [<About/>, <Projects/>, <Teaching/>, <Publications/>, <Hobbies/>, <Contact/>];
    return (categoryComponents[categoryId - 1]);
  },

  render: function() {
    return (
      <main id="content">
        <div className="container">
          {this.whichCategory(this.props.category.id)}
        </div>
      </main>
    );
  }
});
