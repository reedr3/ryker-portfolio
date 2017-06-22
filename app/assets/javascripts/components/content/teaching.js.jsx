var Teaching = React.createClass({
  render: function() {
    return (
      <div id="teaching-experiences">
        <HobbyTeaching
          title="How to Be a Trans Ally"
          description="games yay  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          modalImages={["https://media.defense.gov/2017/May/04/2001742116/-1/-1/0/170512-A-PO640-006.JPG", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/19400056_10156190015003998_3102385845901665293_n.jpg?oh=995490d99605856f967fc47b0049fb3a&oe=59E3B792", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/19396972_10156190014853998_569284778756724901_n.jpg?oh=d68e48845b05694a36cbd6c3f80ecf1d&oe=59CE83A5", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/19275155_10156190014923998_2207427040674911750_n.jpg?oh=5e24643b2558da35b72844e4dabaa60d&oe=59C7000E"]}
          imageCaptions={["Trans flag and symbol", "Page 1 of workshop handout. Definition of terms and examples of gender pronouns.", "Page 2 of workshop handout. Tips for allies.", "Page 3 of workshop handout. Gender Unicorn visual chart, credit: Trans Student Equality Resources. Design by Landyn Pan."]}
        />

        <HobbyTeaching
          title="Languages of Middle Earth"
          description="games yay  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          modalImages={["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_.jpg/640px-World_map_.jpg", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/19260616_10156189938288998_5059542814097996540_n.jpg?oh=8dcc8a045c153fe73fd8c326df42760d&oe=59D9AC95", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/19274737_10156189942663998_3224191479949750665_n.jpg?oh=51ae485e06c70239064325b431a2a031&oe=59E7EE3F"]}
          imageCaptions={["Map of Middle Earth", "Page 1 of class handout. Shows alphabets and Elvish language evolutionary tree.", "Page 2 of class handout. Shows examples of Tolkien's different languages."]}
        />

        <HobbyTeaching
          title="Quirky Linguistics"
          description="games yay  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          modalImages={["https://c1.staticflickr.com/7/6170/6191856748_5fcae826ec_b.jpg", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/19366611_10156190014988998_1056335471293014381_n.jpg?oh=9240ec95c20d398f6fdd57ccc5b1b31c&oe=59D31D1F", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/19260340_10156190014998998_5212705429059348326_n.jpg?oh=26782d86f4ea969c796b54698023a8c1&oe=59CE46A0", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/18403090_10156190014993998_3681553554698609889_n.jpg?oh=a30e8551988a3a20869f28771e2f4797&oe=59E72CEA"]}
          imageCaptions={["Famous linguistics experiment called the wug test.", "Page 1 of class handout.", "Page 2 of class handout.", "Page 3 of class handout."]}
        />
      </div>
    );
  }
});
