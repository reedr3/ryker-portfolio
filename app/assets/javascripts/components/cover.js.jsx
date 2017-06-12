var Cover = React.createClass({
  getInitialState: function() {
    return {image: this.props.data};
  },

  render: function() {
    return (
      <div> <img id="cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3Zzxmk-mDG5ilyILLTJ4GQvdElqRiPEnYzvNV2_F5w64sGN3dg" /> </div>
    );
  }
});
