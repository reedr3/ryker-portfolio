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
          modalImages={["https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=PsHBYbLmA06UclvJK%2BlANZQAVqc%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3Pof8SLebb3uVsTKiUclFZnLvL6STngD8a6Ioq6etxyisXgIY24ZxUBbFImi24", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg"]}
          imageCaptions={["(Class view) This is an example of a quiz question and multiple choice answers.", "(Teacher view) They can access student results for past quizzes from here or begin a new quiz.", "Register page with options to sign up as a teacher or student."]}
        />

        <Project
          title="My Linguistic Facts"
          description="I created and published a skill for the Amazon Alexa skills store. This skill allows Alexa to dynamically respond to requests for information about linguistics. It allows Alexa to respond with a variety of different facts about linguistics spanning many sub-fields including syntax, phonology, morphology, semantics, historical linguistics, language acquisition, and constructed languages."
          github=""
          liveApp="http://alexa.amazon.com/spa/index.html#skills/dp/B01MAWGFIG"
          liveAppName="Alexa Skill"
          skills={["Javascript", "Node.js", "Alexa Skills Kit", "Amazon AWS Lambda"]}
          modalImages={["https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=NKqpjVNrkxdJMA%2ByLgrxnz%2ByyZY%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3Ppf5WJK-OnuQ8SKS4clAdgLfL5FWK3D5vvKI7re9gnjpbtco24ZxUBbFImi24", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg"]}
          imageCaptions={["My Linguistic Facts skill icon", "My Linguistic Facts on the Alexa skills store, showing example invocation phrases."]}
        />

        <Project
          title="My Gender Identity Facts"
          description="I created and published a skill for the Amazon Alexa skills store. This skill allows Alexa to dynamically respond to requests for information about gender identity. It allows Alexa to respond with a variety of different facts about gender identity, including defining general terms like gender identity and gender expression as well as defining many specific gender identities such as transgender, cisgender, and non binary. It also provides information on gender neutral pronouns and how to use them."
          github=""
          liveApp="http://alexa.amazon.com/spa/index.html#skills/dp/B0736FC2LX"
          liveAppName="Alexa Skill"
          skills={["Javascript", "Node.js", "Alexa Skills Kit", "Amazon AWS Lambda"]}
          modalImages={["https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg"]}
          imageCaptions={["My Gender Identity Facts skill icon", "My Gender Identity Facts on the Alexa skills store, showing example invocation phrases."]}
        />

        <Project
          title="Ryker's Portfolio"
          description="I created this portfolio website to showcase my learning process and accomplishments as a developer. The website was created using Rails and React and is hosted on Heroku."
          github="https://github.com/reedr3/ryker-portfolio"
          liveApp="http://immense-shore-40076.herokuapp.com/"
          liveAppName="Heroku App"
          skills={["Ruby", "Rails", "Javascript", "React", "HTML5", "CSS"]}
          modalImages={["https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg"]}
          imageCaptions={["About Page", "Projects Page", "Teaching Page"]}
          />

        <Project
          title="My Hogwarts Sorting Hat"
          description="I created and published a skill for the Amazon Alexa skills store. This skill is an interactive adventure designed to make the user feel as though they are a student at Hogwarts being sorted into their house. It allows users to hear the Hogwarts sorting songs and then answer a series of questions about themselves. It uses these answers to determine which Hogwarts house they belong in and announces it as the sorting hat would. There are several Harry Potter easter eggs for those who explore all the possible interaction options."
          github="https://github.com/reedr3/unofficial-sorting-hat"
          liveApp=""
          liveAppName="Alexa Skill"
          skills={["Javascript", "Node.js", "Alexa Skills Kit", "Amazon AWS Lambda"]}
          modalImages={["https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg", "https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg"]}
          imageCaptions={["My Hogwarts Sorting Hat skill icon", "My Hogwarts Sorting Hat on the Alexa skills store, showing example invocation phrases."]}
        />
      </div>
    );
  }
});
