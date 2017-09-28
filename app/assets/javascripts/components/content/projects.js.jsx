var Projects = React.createClass({
  render: function() {
    return (
      <div id="projects">
        <Project
          title="My Portfolio"
          description="I created this portfolio website to showcase my coding projects, personal accomplishments, volunteer work, and hobbies."
          github="https://github.com/reedr3/ryker-portfolio"
          liveApp="http://ryker-reed.herokuapp.com/"
          liveAppName="Heroku App"
          skills={["Ruby", "Rails", "JavaScript", "React", "HTML5", "CSS"]}
          logoImage="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21462249_10156514832993998_1366816858867923594_n.jpg?oh=27e0e0bb49e87842d73a544b3bf1cd30&oe=5A878BAF"
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21462421_10156515180118998_5119511060757005911_n.jpg?oh=8d68ef8edfa8d68bf54374d562d29d5e&oe=5A5A637E", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21766282_10156539082023998_1153086474798877555_n.jpg?oh=74780cc76cc418847fbc8afc416679b7&oe=5A8486D7", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21462941_10156515165628998_1524018878667669858_n.jpg?oh=3439772e715bb379c934e512e360af14&oe=5A550806", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21739995_10156515165658998_8383588823318379725_n.jpg?oh=cd2ac05e8b39db3ec1243683dc3d2c8d&oe=5A41D86D", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21731209_10156515165668998_3982420408126279535_n.jpg?oh=9674ddc2948183aaae0fef1a9c4ab645&oe=5A59D72A"]}
          imageCaptions={["", "The About page.", "The Projects page.", "The Teaching page.", "The Hobbies page."]}
        />

        <Project
          title="Game the Progress"
          description="I designed and built Game the Progress, which is a web app created to give teachers a platform to custom build and play game quizzes with multiple students. I worked with a team of four other developers over an eight day period to go from initial pitch to functional product. I worked primarily on the backend ActiveRecord associations and Action Cable WebSockets interface. With my team I demoed the app in front of a live audience and it is available to use on Heroku."
          github="https://github.com/domlet/game_the_progress"
          liveApp="http://gametheprogress.herokuapp.com/"
          liveAppName="Heroku App"
          skills={["Ruby", "Rails", "Action Cable", "HTML5", "CSS"]}
          logoImage="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21731140_10156514867528998_6705568416102017004_n.jpg?oh=bb52c8f4be3fd5c6390660f4f0158474&oe=5A4931BD"
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21433121_10156514984853998_8516371410498667700_n.jpg?oh=51cdc1939de27d489ae440ce5eca91f2&oe=5A3ECA35", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19511050_10156204503273998_4583540318610076101_n.jpg?oh=c2fb3ae5ee152e9f98fee00547ccdf9a&oe=5A4405F4", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19420774_10156204503438998_1597688921241360681_n.jpg?oh=0c0fab901360e20249fc5942dd7bbe41&oe=5A523399", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19554717_10156204503198998_3784043851095858786_n.jpg?oh=3ab9c97f59a1ed09b2ea73a36e76db70&oe=5A4B81F0"]}
          imageCaptions={["", "An example of a quiz question and multiple choice answers. This is the class view shown to students.", "The teacher's page, where they can access student results for past quizzes or begin a new quiz.", "The registration page, with options to sign up as a teacher or student."]}
        />

        <Project
          title="My Hogwarts Sorting Hat"
          description="I created and published a skill for the Amazon Alexa skills store. This skill is an interactive adventure designed to make the user feel as though they are a student at Hogwarts being sorted into their house. It allows users to hear the Hogwarts sorting songs and then answer a series of questions about themselves. It uses these answers to determine which Hogwarts house they belong in and announces it as the sorting hat would. There are several Harry Potter easter eggs for those who explore all the possible interaction options."
          github="https://github.com/reedr3/my-hogwarts-sorting-hat"
          liveApp="https://www.amazon.com/gp/product/B075FZGK3Y"
          liveAppName="Alexa Skill"
          skills={["JavaScript", "Node.js", "AWS Lambda"]}
          logoImage="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21739951_10156515359463998_5371302477692199321_n.jpg?oh=8d64431bfcb1b5c75f9f260f693c514c&oe=5A842C3E"
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21752279_10156515359458998_9158730732599235780_n.jpg?oh=3138253ac84993946a8c8e4f001e2d53&oe=5A3DFCFC", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728027_10156502510253998_3300946840728705226_n.jpg?oh=ba6413adf8815926b168df0f5407d9e2&oe=5A550C91"]}
          imageCaptions={["", "My Hogwarts Sorting Hat on the Alexa skills store, showing example invocation phrases."]}
        />

        <Project
          title="Pensieve"
          description="I created Pensieve, a web app designed to aid and increase productivity by allowing users to efficiently compartmentalize and sort through tasks. This app is in the final stage of testing and development and will be live in a few days!"
          github="https://github.com/reedr3/pensieve"
          liveApp="http://pensieve.herokuapp.com/"
          liveAppName="Coming Soon"
          skills={["Ruby", "Rails", "JavaScript", "React", "HTML5", "CSS"]}
          logoImage="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/22046456_10156578963083998_9052620055088221328_n.jpg?oh=04f65c9c3ae3657aa5df162015bb6411&oe=5A8007B2"
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/22050279_10156578935633998_3362974870647264956_n.jpg?oh=cc245460d811eebd083705ab6d40659d&oe=5A806096", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/22050341_10156579170933998_6276083591984200389_n.jpg?oh=b637f84f80e02c77ecd720be04fbc3ed&oe=5A5166DE", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21768227_10156579188978998_4231653860548863983_n.jpg?oh=eb8be4efc45c26269f7bcc8bd5b5e074&oe=5A4755B0", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/22007935_10156579170938998_8468072473807859275_n.jpg?oh=a0cfdf6bbbcf8427d4b87effdaec4ea6&oe=5A572F7E"]}
          imageCaptions={["", "The home page for a user, displaying their categories of tasks.", "The view for a particular category of tasks. Tasks organized by difficulty.", "The view for adding a new task."]}
        />

        <Project
          title="My Linguistic Facts"
          description="I created and published a skill for the Amazon Alexa skills store. This skill allows Alexa to dynamically respond to requests for information about linguistics. It allows Alexa to respond with a variety of different facts about linguistics spanning many sub-fields including syntax, phonology, morphology, semantics, historical linguistics, language acquisition, and constructed languages."
          github="https://github.com/reedr3/my-linguistic-facts"
          liveApp="https://www.amazon.com/gp/product/B01MAWGFIG"
          liveAppName="Alexa Skill"
          skills={["JavaScript", "Node.js", "AWS Lambda"]}
          logoImage="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21433057_10156515419303998_2105489843247705331_n.jpg?oh=a947c6274f886d75ea092d8e3d28e4d0&oe=5A845B18"
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21433198_10156515419298998_7904922255306573446_n.jpg?oh=de80e492d60a37bfeda13aa1fc4c2a85&oe=5A5197D0", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728266_10156502510258998_1411791451728250120_n.jpg?oh=384e747da38dbf0b762cd4765207d544&oe=5A4B665A"]}
          imageCaptions={["", "My Linguistic Facts on the Alexa skills store, showing example invocation phrases."]}
        />

        <Project
          title="My Gender Identity Facts"
          description="I created and published a skill for the Amazon Alexa skills store. This skill allows Alexa to dynamically respond to requests for information about gender identity. It allows Alexa to respond with a variety of different facts about gender identity, including defining general terms like gender identity and gender expression as well as defining many specific gender identities such as transgender, cisgender, and non binary. It also provides information on gender neutral pronouns and how to use them."
          github="https://github.com/reedr3/my-gender-identity-facts"
          liveApp="https://www.amazon.com/gp/product/B0736FC2LX"
          liveAppName="Alexa Skill"
          skills={["JavaScript", "Node.js", "AWS Lambda"]}
          logoImage="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21462922_10156515475118998_5678893124895420001_n.jpg?oh=4d15528aad6d66983288a3fa4477cf67&oe=5A84C267"
          modalImages={["https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21731256_10156515469238998_7734718780192932514_n.jpg?oh=9cc5b65fa1a01deead24b39982fed4ea&oe=5A5894ED", "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21751808_10156502510303998_3076977622821457210_n.jpg?oh=05f2198aabe1a0e5eadb2c00f1ea90e4&oe=5A487E30"]}
          imageCaptions={["", "My Gender Identity Facts on the Alexa skills store, showing example invocation phrases."]}
        />
      </div>
    );
  }
});
