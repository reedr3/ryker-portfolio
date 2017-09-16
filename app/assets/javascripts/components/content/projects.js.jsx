var Projects = React.createClass({
  render: function() {
    return (
      <div id="projects">
        <Project
          title="My Portfolio"
          description="I created this portfolio website to showcase my learning process and accomplishments as a developer. The website was created using Ruby on Rails and React."
          github="https://github.com/reedr3/ryker-portfolio"
          liveApp="http://ryker-reed.herokuapp.com/"
          liveAppName="Heroku App"
          skills={["Ruby", "Rails", "Javascript", "React", "HTML5", "CSS"]}
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21743089_10156505665343998_7669925002054517281_n.jpg?oh=7551859616ce0291263b05a6b67c7a39&oe=5A14175B", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728470_10156505665338998_8132441163107722243_n.jpg?oh=2ce973a399f9fdd30d898b435b616e99&oe=5A596B40", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728470_10156505665338998_8132441163107722243_n.jpg?oh=2ce973a399f9fdd30d898b435b616e99&oe=5A596B40", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728470_10156505665338998_8132441163107722243_n.jpg?oh=2ce973a399f9fdd30d898b435b616e99&oe=5A596B40"]}
          imageCaptions={["Projects Page", "Teaching Page", "Hobbies Page"]}
        />

        <Project
          title="Game the Progress"
          description="I designed and built Game the Progress, which is a web app created to give teachers a platform to custom build and play game quizzes with multiple students. I worked with a team of four other developers over an eight day period to go from initial pitch to functional product. I worked primarily on the backend ActiveRecord associations and Action Cable WebSockets interface. With my team I demoed the app in front of a live audience and it is available to use on Heroku."
          github="https://github.com/domlet/game_the_progress"
          liveApp="http://gametheprogress.herokuapp.com/"
          liveAppName="Heroku App"
          skills={["Ruby", "Rails", "Action Cable", "HTML5", "CSS"]}
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21740586_10156505280933998_5793197975455064558_n.jpg?oh=79401cb314d450e8421b451468f1fba9&oe=5A1A4D03", "https://scontent.xx.fbcdn.net/v/t1.0-9/19511050_10156204503273998_4583540318610076101_n.jpg?oh=b6e525773c0069012fa035b792a4b010&oe=59CD5EF4", "https://scontent.xx.fbcdn.net/v/t1.0-9/19420774_10156204503438998_1597688921241360681_n.jpg?oh=ca85c9a183bb7488502745d5dad778f6&oe=59DB8C99", "https://scontent.xx.fbcdn.net/v/t1.0-9/19554717_10156204503198998_3784043851095858786_n.jpg?oh=dbe7841be96cd2cadff3fb6c2f42a936&oe=59D4DAF0"]}
          imageCaptions={["(Class view) This is an example of a quiz question and multiple choice answers.", "(Teacher view) They can access student results for past quizzes from here or begin a new quiz.", "Register page with options to sign up as a teacher or student."]}
        />

        <Project
          title="My Hogwarts Sorting Hat"
          description="I created and published a skill for the Amazon Alexa skills store. This skill is an interactive adventure designed to make the user feel as though they are a student at Hogwarts being sorted into their house. It allows users to hear the Hogwarts sorting songs and then answer a series of questions about themselves. It uses these answers to determine which Hogwarts house they belong in and announces it as the sorting hat would. There are several Harry Potter easter eggs for those who explore all the possible interaction options."
          github="https://github.com/reedr3/my-hogwarts-sorting-hat"
          liveApp="https://www.amazon.com/gp/product/B075FZGK3Y"
          liveAppName="Alexa Skill"
          skills={["Javascript", "Node.js", "Amazon AWS Lambda"]}
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21752188_10156512000753998_973511847002104701_n.jpg?oh=ae1f727a1f250f149879782c2bb47a64&oe=5A13D79B", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21742972_10156512000758998_1124914126911441289_n.jpg?oh=a509db5338d2b590b738c9faef1ceabd&oe=5A5B826F", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728027_10156502510253998_3300946840728705226_n.jpg?oh=ba6413adf8815926b168df0f5407d9e2&oe=5A550C91"]}
          imageCaptions={["My Hogwarts Sorting Hat Alexa Skill Logo", "My Hogwarts Sorting Hat on the Alexa skills store, showing example invocation phrases."]}
        />

        <Project
          title="Pensieve"
          description="Task management app."
          github="https://github.com/reedr3/pensieve"
          liveApp="http://pensieve.herokuapp.com/"
          liveAppName="Heroku App"
          skills={["Ruby", "Rails", "Javascript", "React", "HTML5", "CSS"]}
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21740033_10156505665333998_7377973128175305145_n.jpg?oh=32ddbe76d35f0e1f6e5a9f5508edf23e&oe=5A5761B7", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728470_10156505665338998_8132441163107722243_n.jpg?oh=2ce973a399f9fdd30d898b435b616e99&oe=5A596B40", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728470_10156505665338998_8132441163107722243_n.jpg?oh=2ce973a399f9fdd30d898b435b616e99&oe=5A596B40"]}
          imageCaptions={["img1", "img2", "img3"]}
        />

        <Project
          title="My Linguistic Facts"
          description="I created and published a skill for the Amazon Alexa skills store. This skill allows Alexa to dynamically respond to requests for information about linguistics. It allows Alexa to respond with a variety of different facts about linguistics spanning many sub-fields including syntax, phonology, morphology, semantics, historical linguistics, language acquisition, and constructed languages."
          github="https://github.com/reedr3/my-linguistic-facts"
          liveApp="https://www.amazon.com/gp/product/B01MAWGFIG"
          liveAppName="Alexa Skill"
          skills={["Javascript", "Node.js", "Amazon AWS Lambda"]}
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21740420_10156502510233998_7107315001978192820_n.jpg?oh=353cb1da5b8db7cd5e931e860a216bac&oe=5A1B6776", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728266_10156502510258998_1411791451728250120_n.jpg?oh=384e747da38dbf0b762cd4765207d544&oe=5A4B665A"]}
          imageCaptions={["My Linguistic Facts Alexa Skill Logo", "My Linguistic Facts on the Alexa skills store, showing example invocation phrases."]}
        />

        <Project
          title="My Gender Identity Facts"
          description="I created and published a skill for the Amazon Alexa skills store. This skill allows Alexa to dynamically respond to requests for information about gender identity. It allows Alexa to respond with a variety of different facts about gender identity, including defining general terms like gender identity and gender expression as well as defining many specific gender identities such as transgender, cisgender, and non binary. It also provides information on gender neutral pronouns and how to use them."
          github="https://github.com/reedr3/my-gender-identity-facts"
          liveApp="https://www.amazon.com/gp/product/B0736FC2LX"
          liveAppName="Alexa Skill"
          skills={["Javascript", "Node.js", "Amazon AWS Lambda"]}
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728084_10156502510243998_325431731644107850_n.jpg?oh=84c35aa92e07bcb4f40456a09d5177c1&oe=5A4DFB25", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21751808_10156502510303998_3076977622821457210_n.jpg?oh=05f2198aabe1a0e5eadb2c00f1ea90e4&oe=5A487E30"]}
          imageCaptions={["My Gender Identity Facts Alexa Skill Logo", "My Gender Identity Facts on the Alexa skills store, showing example invocation phrases."]}
        />
      </div>
    );
  }
});
