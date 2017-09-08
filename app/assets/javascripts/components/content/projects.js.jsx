var Projects = React.createClass({
  render: function() {
    return (
      <div id="projects">
        <Project
          title="Game the Progress"
          description="I designed and built Game the Progress, which is a web app created to give teachers a platform to custom build and play game quizzes with multiple students. I worked with a team of four other developers over an eight day period to go from initial pitch to functional product. I worked primarily on the backend ActiveRecord associations and Action Cable WebSockets interface. With my team I demoed the app in front of a live audience and it is available to use on Heroku."
          github="https://github.com/domlet/game_the_progress"
          liveApp="http://gametheprogress.herokuapp.com/"
          liveAppName="Heroku App"
          skills={["Ruby", "Rails", "Action Cable", "HTML5", "CSS"]}
          modalImages={["https://scontent.xx.fbcdn.net/v/t1.0-9/19511050_10156204503273998_4583540318610076101_n.jpg?oh=b6e525773c0069012fa035b792a4b010&oe=59CD5EF4", "https://scontent.xx.fbcdn.net/v/t1.0-9/19420774_10156204503438998_1597688921241360681_n.jpg?oh=ca85c9a183bb7488502745d5dad778f6&oe=59DB8C99", "https://scontent.xx.fbcdn.net/v/t1.0-9/19554717_10156204503198998_3784043851095858786_n.jpg?oh=dbe7841be96cd2cadff3fb6c2f42a936&oe=59D4DAF0"]}
          imageCaptions={["(Class view) This is an example of a quiz question and multiple choice answers.", "(Teacher view) They can access student results for past quizzes from here or begin a new quiz.", "Register page with options to sign up as a teacher or student."]}
        />

        <Project
          title="My Linguistic Facts"
          description="I created and published a skill for the Amazon Alexa skills store. This skill allows Alexa to dynamically respond to requests for information about linguistics. It allows Alexa to respond with a variety of different facts about linguistics spanning many sub-fields including syntax, phonology, morphology, semantics, historical linguistics, language acquisition, and constructed languages."
          github="https://github.com/reedr3/my-linguistic-facts"
          liveApp="http://alexa.amazon.com/spa/index.html#skills/dp/B01MAWGFIG"
          liveAppName="Alexa Skill"
          skills={["Javascript", "Node.js", "Amazon AWS Lambda"]}
          modalImages={["https://scontent.xx.fbcdn.net/v/t1.0-9/19424474_10156204540743998_5233768878701445705_n.jpg?oh=a3c561d412e7400fa94b1ec00dc1d3ed&oe=59C4F06C"]}
          imageCaptions={["My Linguistic Facts on the Alexa skills store, showing example invocation phrases."]}
        />

        <Project
          title="My Gender Identity Facts"
          description="I created and published a skill for the Amazon Alexa skills store. This skill allows Alexa to dynamically respond to requests for information about gender identity. It allows Alexa to respond with a variety of different facts about gender identity, including defining general terms like gender identity and gender expression as well as defining many specific gender identities such as transgender, cisgender, and non binary. It also provides information on gender neutral pronouns and how to use them."
          github="https://github.com/reedr3/my-gender-identity-facts"
          liveApp="http://alexa.amazon.com/spa/index.html#skills/dp/B0736FC2LX"
          liveAppName="Alexa Skill"
          skills={["Javascript", "Node.js", "Amazon AWS Lambda"]}
          modalImages={["https://scontent.xx.fbcdn.net/v/t1.0-9/19420527_10156204539503998_669361087570957194_n.jpg?oh=d8ce148938f427fa8d81d541b9d8e96d&oe=59D4F15D"]}
          imageCaptions={["My Gender Identity Facts on the Alexa skills store, showing example invocation phrases."]}
        />

        <Project
          title="Ryker's Portfolio"
          description="I created this portfolio website to showcase my learning process and accomplishments as a developer. The website was created using Rails and React and is hosted on Heroku."
          github="https://github.com/reedr3/ryker-portfolio"
          liveApp="http://ryker-reed.herokuapp.com/"
          liveAppName="Heroku App"
          skills={["Ruby", "Rails", "Javascript", "React", "HTML5", "CSS"]}
          modalImages={["https://scontent.xx.fbcdn.net/v/t1.0-9/19420398_10156204591268998_4444017874089332676_n.jpg?oh=5079f0b6dad509889744d92d087e4ae4&oe=59DF2D5A", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg"]}
          imageCaptions={["Projects Page", "Teaching Page", "Hobbies Page"]}
          />

        <Project
          title="My Hogwarts Sorting Hat"
          description="I created and published a skill for the Amazon Alexa skills store. This skill is an interactive adventure designed to make the user feel as though they are a student at Hogwarts being sorted into their house. It allows users to hear the Hogwarts sorting songs and then answer a series of questions about themselves. It uses these answers to determine which Hogwarts house they belong in and announces it as the sorting hat would. There are several Harry Potter easter eggs for those who explore all the possible interaction options."
          github="https://github.com/reedr3/my-hogwarts-sorting-hat"
          liveApp=""
          liveAppName="Alexa Skill"
          skills={["Javascript", "Node.js", "Amazon AWS Lambda"]}
          modalImages={["https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg"]}
          imageCaptions={["My Hogwarts Sorting Hat on the Alexa skills store, showing example invocation phrases."]}
        />

        <Project
          title="Pensieve"
          description="Task management app."
          github="https://github.com/reedr3/pensieve"
          liveApp="http://pensieve.herokuapp.com/"
          liveAppName="Heroku App"
          skills={["Ruby", "Rails", "Javascript", "React", "HTML5", "CSS"]}
          modalImages={["https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg"]}
          imageCaptions={["img1", "img2", "img3"]}
          />
      </div>
    );
  }
});
