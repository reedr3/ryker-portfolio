var About = React.createClass({
  render: function() {
    return (
      <div id="about">
        <div id="intro">
          <a href="https://www.linkedin.com/in/ryker-reed/"> <img src="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21558535_10156524233113998_8090512483609019131_n.jpg?oh=04ff717f664a28c1a6c4608530d060b9&oe=5A4E2AFA"/> </a>
          <p>Hi, I'm Ryker! I'm a software engineer who's passionate about life-long learning and creating beautiful and meaningful things to help others. Welcome to my portfolio! I've got a wide range of accomplishments and interests which would make me a valuable member of any team. Have a look around and don't hesitate to reach out through my contact page! </p>
        </div>

        <div id="skills-cloud">
          <h1>Skills</h1>
          <SkillsCloud
            topSkills={["JavaScript", "React", "Ruby on Rails", "HTML", "CSS"]}
            middleSkills={["jQuery", "AJAX", "PostgreSQL", "SQLite", "ActiveRecord"]}
            bottomSkills={["Python", "Node.js", "AWS Lambda", "Action Cable"]}
          />
        </div>

        <div id="testimonials">
          <h1>Testimonials</h1>

          <Testimonial
            name="Maria Uyeda"
            dialog="Ryker is an intelligent developer whose strength lies in his ability to solve complex problems through programming. He uses his vast understanding of algorithms and logic to creatively design products with a beautiful front-end and a clean back-end. I have worked on several teams with Ryker and witnessed his dedication for building meaningful programs that promote a more equal and just society. I would gladly work with Ryker again because of his programming expertise and his ability to bring a team together through strong leadership!"
            headshot="https://media.licdn.com/media/AAEAAQAAAAAAAAd9AAAAJDE0YzI2YzBiLTI1NGUtNDAzMy04MTMxLWFjNzI3NzU5YmQzMg.jpg"
            linkedin="https://www.linkedin.com/in/maria-uyeda/"
            textSide="left"
          />

          <Testimonial
            name="Jim Lengel"
            dialog="I worked with Ryker on an intensive 2-week project when we were students at Dev Bootcamp. What impressed me most about Ryker was his ability to problem solve quickly and methodically. We were implementing a new feature in Rails (Action Cable) and he was able to read the limited documentation and get the feature working in a short period of time. Also, on our team, we had rotating project managers. When it was Ryker’s turn as manager, the team worked smoothly and communication was optimal. Everyone felt extremely confident in Ryker’s ability to lead our team. Ryker is intelligent, insightful, humble, and persistent. His work throughout the Dev Bootcamp program stood out as some of the best code of the group and he was always willing to explain difficult concepts to his cohort members. I would happily work on another project with Ryker in the future."
            headshot="https://media.licdn.com/media/AAEAAQAAAAAAAAcyAAAAJGFkMmVmZjc1LTk3MGItNGEyMS1iODRiLTMxNzQ2NGUwYmZjMQ.jpg"
            linkedin="https://www.linkedin.com/in/jimlengel/"
            textSide="right"
          />
        </div>

      </div>
    );
  }
});
