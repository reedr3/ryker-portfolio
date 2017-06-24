var Hobbies = React.createClass({
  render: function() {
    return (
      <div id="hobbies">
        <HobbyTeaching
          title="Barnstormers Softball"
          description="I play first base for the Barnstormers softball team. We are a team for trans and gender non-conforming players, who are so often excluded from sports. Along with our sibling team the Trailblazers we aim to make a place for trans players and make sports more welcoming to everyone. We play in the Boston Beantown league."
          modalImages={["https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/14590365_10155313424798998_5363094388011485120_n.jpg?oh=db26a6b9ff9b2ee2e8028f700e17681f&oe=59D9C747", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10352776_10200556361427083_6029483449388138487_n.jpg?oh=21f948bbf7716679265ce8753f3212a0&oe=59E1B367", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p526x296/19424358_10156189733928998_7281557071917389105_n.jpg?oh=aed3adda6ec72e1623d3ef6e87ba7e83&oe=59CC0E93"]}
          imageCaptions={["Barnstormers and Trailblazers joint team photo (2016)", "Barnstormers celebrating a double header victory (2015)", "Ryker at bat (2016)"]}
        />

        <HobbyTeaching
          title="Constructed Languages"
          description="I have been fascinated by constructed languages since I was young. Tolkien and his extremely elaborate and extensive constructed languages has been a particular inspiration. Using my knowledge of Linguistics, I work on creating my own grammars and alphabets, as well as reading about constructed languages in literature and movies."
          modalImages={["http://www.omniglot.com/images/langsamples/udhr_tengwar_en.gif", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/17951828_10155929569903998_7785127894840825589_n.jpg?oh=cdae8bbc3cac4f203b65e99b4030cf2b&oe=59CF4705"]}
          imageCaptions={["caption 1", "caption 2", "caption 3"]}
        />

        <HobbyTeaching
          title="Cosplay"
          description="I love making costumes and just this year I finally attended my first Convention. I enjoy doing solo cosplays and also group cosplays with my friends. My favorite things to make are props and I'm especially good at making all manner of things out of duct tape."
          modalImages={["https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/17951828_10155929569903998_7785127894840825589_n.jpg?oh=cdae8bbc3cac4f203b65e99b4030cf2b&oe=59CF4705", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/17634505_10211843396660885_4147268397520629838_n.jpg?oh=819636b07df68a870ba387db0281b5aa&oe=59E99408", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/17523565_10211897312968759_6915739742822664650_n.jpg?oh=67eb3f23962c8e20a9b482123a813305&oe=59E689D0"]}
          imageCaptions={["Commander Riker and Lieutenant Geordi meeting Lieutenant Uhura (the incredible Nichelle Nichols)!", "Milo and Kida from Atlantis the Lost Empire", "Rey and Finn from the Force Awakens"]}
        />
      </div>
    );
  }
});
