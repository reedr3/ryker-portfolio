var Hobbies = React.createClass({
  render: function() {
    return (
      <div id="hobbies">
        <HobbyTeaching
          title="Barnstormers Softball"
          description="I play first base for the Barnstormers softball team. We are a team for trans and gender non-conforming players, who are so often excluded from sports. Along with our sibling team the Trailblazers we aim to make a place for trans players and make sports more welcoming to everyone. We play in the Boston Beantown league."
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19424450_10156204688203998_7388505682361865170_n.jpg?oh=5023f979ae50b5fd841a2090d9bb7a57&oe=5A3A7BF3", "https://scontent.xx.fbcdn.net/v/t1.0-9/19429975_10156204681498998_6473991747997450750_n.jpg?oh=016291af76dded0d984332df74ed58f7&oe=59D6CBEA", "https://scontent.xx.fbcdn.net/v/t1.0-9/19437659_10156204684953998_4328046667440108543_n.jpg?oh=1fa9a58b283206baf05a488a841a514d&oe=59DA4C25"]}
          imageCaptions={["Barnstormers and Trailblazers joint team photo (2016)", "Barnstormers celebrating a double header victory (2015)", "Ryker at bat (2016)"]}
        />

        <HobbyTeaching
          title="Constructed Languages"
          description="I have been fascinated by constructed languages since I was young. Tolkien and his extremely elaborate and extensive constructed languages has been a particular inspiration. Using my knowledge of Linguistics, I work on creating my own grammars and alphabets, as well as reading about constructed languages in literature and movies."
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21743277_10156501902428998_5801873539656788311_n.jpg?oh=ae9aa3641f1ff2267d39575b64a8e8d4&oe=5A131753", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21740661_10156501902423998_2119303293922793447_n.jpg?oh=abfc5894e931c5a6bc43eaf8fc67bbaf&oe=5A5F6CDB", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21751553_10156501902418998_6666268973380199923_n.jpg?oh=02c77b5c61ec368c1caa3734e4193702&oe=5A5B6E6C"]}
          imageCaptions={["A message written in my invented alphabet. Can you decipher it?", "A chart showing the consonants of my invented alphabet.", "A chart showing the vowels of my invented alphabet."]}
        />

        <HobbyTeaching
          title="Cosplay"
          description="I love making costumes and just this year I finally attended my first Convention. I enjoy doing solo cosplays and also group cosplays with my friends. My favorite things to make are props and I'm especially good at making all manner of things out of duct tape."
          modalImages={["https://scontent.xx.fbcdn.net/v/t1.0-9/19420734_10156204842748998_215921509591975239_n.jpg?oh=93ee9c93904fedf49a5b24d400b4a0f5&oe=59D36CB5", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19437598_10156204943868998_6577700759491729550_n.jpg?oh=c9d77188a3ed82157ffc6fa90979449c&oe=5A3B0E4B", "https://scontent.xx.fbcdn.net/v/t1.0-9/19510113_10156204833768998_2838069383390061927_n.jpg?oh=8f887028124d478f8b00cb1b2e232620&oe=59DC59DC"]}
          imageCaptions={["Commander Riker and Lieutenant Geordi meeting Lieutenant Uhura (the incredible Nichelle Nichols)!", "Milo, Kida, and Audrey from Atlantis the Lost Empire.", "Rey and Finn from the Force Awakens."]}
        />
      </div>
    );
  }
});
