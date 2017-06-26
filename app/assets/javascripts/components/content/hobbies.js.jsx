var Hobbies = React.createClass({
  render: function() {
    return (
      <div id="hobbies">
        <HobbyTeaching
          title="Barnstormers Softball"
          description="I play first base for the Barnstormers softball team. We are a team for trans and gender non-conforming players, who are so often excluded from sports. Along with our sibling team the Trailblazers we aim to make a place for trans players and make sports more welcoming to everyone. We play in the Boston Beantown league."
          modalImages={["https://scontent.xx.fbcdn.net/v/t1.0-9/19424450_10156204688203998_7388505682361865170_n.jpg?oh=ec77ee4ebe379d1b457474a20f1524f8&oe=59C3D4F3", "https://scontent.xx.fbcdn.net/v/t1.0-9/19429975_10156204681498998_6473991747997450750_n.jpg?oh=016291af76dded0d984332df74ed58f7&oe=59D6CBEA", "https://scontent.xx.fbcdn.net/v/t1.0-9/19437659_10156204684953998_4328046667440108543_n.jpg?oh=1fa9a58b283206baf05a488a841a514d&oe=59DA4C25"]}
          imageCaptions={["Barnstormers and Trailblazers joint team photo (2016)", "Barnstormers celebrating a double header victory (2015)", "Ryker at bat (2016)"]}
        />

        <HobbyTeaching
          title="Constructed Languages"
          description="I have been fascinated by constructed languages since I was young. Tolkien and his extremely elaborate and extensive constructed languages has been a particular inspiration. Using my knowledge of Linguistics, I work on creating my own grammars and alphabets, as well as reading about constructed languages in literature and movies."
          modalImages={["http://www.omniglot.com/images/langsamples/udhr_tengwar_en.gif", "https://scontent.xx.fbcdn.net/v/t1.0-9/19510677_10156204831528998_5163301968829864421_n.jpg?oh=dbf362087e85ac8cb42a9c0b9d20643e&oe=59CC5AC4", "https://scontent.xx.fbcdn.net/v/t1.0-9/19510314_10156204830858998_3872876319317207694_n.jpg?oh=9a79ac092d08fa1c12ec8622bc4615fe&oe=59C5E72A"]}
          imageCaptions={["My invented alphabet", "A chart showing the different modes for Tolkien's Tengwar script", "A sample of Klingon writing"]}
        />

        <HobbyTeaching
          title="Cosplay"
          description="I love making costumes and just this year I finally attended my first Convention. I enjoy doing solo cosplays and also group cosplays with my friends. My favorite things to make are props and I'm especially good at making all manner of things out of duct tape."
          modalImages={["https://scontent.xx.fbcdn.net/v/t1.0-9/19420734_10156204842748998_215921509591975239_n.jpg?oh=93ee9c93904fedf49a5b24d400b4a0f5&oe=59D36CB5", "https://scontent.xx.fbcdn.net/v/t1.0-9/19437598_10156204943868998_6577700759491729550_n.jpg?oh=438f38768a8afb110856fc29718af18b&oe=59C4674B", "https://scontent.xx.fbcdn.net/v/t1.0-9/19510113_10156204833768998_2838069383390061927_n.jpg?oh=8f887028124d478f8b00cb1b2e232620&oe=59DC59DC"]}
          imageCaptions={["Commander Riker and Lieutenant Geordi meeting Lieutenant Uhura (the incredible Nichelle Nichols)!", "Milo, Kida, and Audrey from Atlantis the Lost Empire", "Rey and Finn from the Force Awakens"]}
        />
      </div>
    );
  }
});
