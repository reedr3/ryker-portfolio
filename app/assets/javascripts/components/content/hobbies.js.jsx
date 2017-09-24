var Hobbies = React.createClass({
  render: function() {
    return (
      <div id="hobbies">
        <HobbyTeaching
          title="Barnstormers Softball"
          description="I play first base for the Barnstormers softball team. We are a team for trans and gender non-conforming players, who are so often excluded from sports. Along with our sibling team the Trailblazers we aim to make a place for trans players and make sports more welcoming to everyone. We play in the Boston Beantown league."
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19424450_10156204688203998_7388505682361865170_n.jpg?oh=5023f979ae50b5fd841a2090d9bb7a57&oe=5A3A7BF3", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19429975_10156204681498998_6473991747997450750_n.jpg?oh=fb5aaba9997ccfc823b3da4bca61e87b&oe=5A4D72EA", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19437659_10156204684953998_4328046667440108543_n.jpg?oh=323f323f8f594d31e0b7ce16a0d909d3&oe=5A50F325"]}
          imageCaptions={["Barnstormers and Trailblazers joint team photo (2016)", "Barnstormers celebrating a double header victory (2015)", "Ryker at bat (2016)"]}
        />

        <HobbyTeaching
          title="Constructed Languages"
          description="I have been fascinated by constructed languages since I was young. Tolkien and his extremely elaborate and extensive constructed languages has been a particular inspiration. Using my knowledge of Linguistics, I work on creating my own grammars and alphabets, as well as reading about constructed languages in literature and movies."
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21743277_10156501902428998_5801873539656788311_n.jpg?oh=2b0fbcab30b970bc1d81ea9610f0edcf&oe=5A3AA453", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21740661_10156501902423998_2119303293922793447_n.jpg?oh=74ee477c70eb283e8b8c093df58d629b&oe=5A86F9DB", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21751553_10156501902418998_6666268973380199923_n.jpg?oh=02c77b5c61ec368c1caa3734e4193702&oe=5A5B6E6C"]}
          imageCaptions={["A message written in my invented alphabet. Can you decipher it?", "A chart showing the consonants of my invented alphabet.", "A chart showing the vowels of my invented alphabet."]}
        />

        <HobbyTeaching
          title="Cosplay"
          description="I love making costumes and just this year I finally attended my first Convention. I enjoy doing solo cosplays and also group cosplays with my friends. My favorite things to make are props and I'm especially good at making all manner of things out of duct tape."
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19420734_10156204842748998_215921509591975239_n.jpg?oh=1b8e120d86f8a3806a1aadab1054e2ff&oe=5A4A13B5", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19437598_10156204943868998_6577700759491729550_n.jpg?oh=c9d77188a3ed82157ffc6fa90979449c&oe=5A3B0E4B", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19510113_10156204833768998_2838069383390061927_n.jpg?oh=25f09f81fb7ac349730b29389711b323&oe=5A5300DC"]}
          imageCaptions={["Commander Riker and Lieutenant Geordi meeting Lieutenant Uhura (the incredible Nichelle Nichols)!", "Milo, Kida, and Audrey from Atlantis the Lost Empire.", "Rey and Finn from the Force Awakens."]}
        />
      </div>
    );
  }
});
