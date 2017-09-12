var Teaching = React.createClass({
  render: function() {
    return (
      <div id="teaching-experiences">
        <HobbyTeaching
          title="How to Be a Trans Ally"
          description="I give workshops on how to be an ally to the trans community. The workshop focuses on how to make your school or workplace more inclusive of trans and gender non-conforming people as well as how to be a personal ally. I provide resources, share personal anecdotes, and lead interactive activities during the workshop designed to give participants more insight into the lives of trans and non-binary people and the unique challenges they can face. I am available to come give a workshop at your school, workplace, or organization, so feel free to get in touch through my contact page!"
          modalImages={["https://scontent.xx.fbcdn.net/v/t1.0-9/19420634_10156205034993998_1007789662130662136_n.jpg?oh=76b78630787198612f7bc196d766b88a&oe=59C6BC73", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21743355_10156502546498998_8236393021045003481_n.jpg?oh=6639b2c511f5edff8b102a693f2a7669&oe=5A56447D"]}
          imageCaptions={["Trans flag and symbol", "Some of the topics covered in my How to Be a Trans Ally Workshop."]}
        />

        <HobbyTeaching
          title="Languages of Middle Earth"
          description="I teach classes for middle and high schoolers about Middle Earth and its rich tapestry of languages. I created these classes because of my love of Linguistics and my love of Lord of the Rings. Tolkien himself was a linguist and imbued his world with an intricate linguistic history. I teach about the various languages seen throughout the books, as well as the evolution of the Elvish languages Sindarin and Quenya. I also cover two of Tolkiens invented alphabets, the Tengwar and the Angerthas."
          modalImages={["https://scontent.xx.fbcdn.net/v/t1.0-9/19554880_10156205035613998_6020797469397805803_n.jpg?oh=cfe508e79d8ef98e789952cea6187216&oe=59D9C2DC", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21731295_10156502546533998_4537389518726989020_n.jpg?oh=e6ebb460e600e6d6548b2a03149dfae6&oe=5A466BAE"]}
          imageCaptions={["Map of Middle Earth", "Some of the topics covered in my Languages of Middle Earth class."]}
        />

        <HobbyTeaching
          title="Quirky Linguistics"
          description="I teach classes for middle and high schoolers about Linguistics and all the weird and fascinating aspects of this wonderful field of study. I cover a variety of topics to give students an idea of what Linguistics is about and all the different subfields it covers. I teach them about everything from reduplication and infixation, to semantic satiation and the wug test. I also give them some interactive linguistic puzzles to solve using morpholigical analysis."
          modalImages={["https://scontent.xx.fbcdn.net/v/t1.0-9/19424478_10156205034558998_8934705063000381150_n.jpg?oh=26fb951d12fd3e24c11455588d89c282&oe=59D7F33C", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728070_10156502546493998_1302051397546872367_n.jpg?oh=d8b553c652642ff31e1c89b8b1a68d08&oe=5A5AB17E"]}
          imageCaptions={["Famous linguistics experiment called the wug test.", "Some of the topics covered in my Quirky Linguistics class."]}
        />
      </div>
    );
  }
});
