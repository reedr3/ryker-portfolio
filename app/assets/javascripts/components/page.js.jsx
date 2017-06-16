var Page = React.createClass({
  render: function() {
    return (
      <div>
        <Logo data="imageurl" />
        <Cover data="imageurl" />
        <Categories data={this.props.categories} />
        <Blocks data={this.props.blocks} />
      </div>
    );
  }
});
