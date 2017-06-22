var Teaching = React.createClass({
  render: function() {
    return (
      <div id="teaching-experiences">
        <HobbyTeaching
          title="How to Be a Trans Ally"
          description="games yay  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          modalImages={["https://media.defense.gov/2017/May/04/2001742116/-1/-1/0/170512-A-PO640-006.JPG"]}
          imageCaptions={["caption 1", "caption 2", "caption 3"]}
        />

        <HobbyTeaching
          title="Languages of Middle Earth"
          description="games yay  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          modalImages={["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_.jpg/640px-World_map_.jpg"]}
          imageCaptions={["caption 1", "caption 2", "caption 3"]}
        />

        <HobbyTeaching
          title="Quirky Linguistics"
          description="games yay  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          modalImages={["https://c1.staticflickr.com/7/6170/6191856748_5fcae826ec_b.jpg"]}
          imageCaptions={["caption 1", "caption 2", "caption 3"]}
        />
      </div>
    );
  }
});
