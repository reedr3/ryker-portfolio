var About = React.createClass({
  render: function() {
    return (
      <div id="about">
        <div id="intro">
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/04b/0ea/1013262.jpg" />
          <h2>Hi, I'm Ryker! I'm a software engineer who's passioante about life-long learning and creating beautiful and meaningful things to help others. Welcome to my portfolio! I've got a wide range of accomplishments and interests which would make me a valuable member of any team. Have a look around and don't hesitate to reach out through my contact page! </h2>
        </div>

        <div id="skills-cloud">
          <p>cloud of skills with important ones bigger, react, js, rails</p>
        </div>

        <div id="testimonials">
          <h2>Testimonials</h2>

          <Testimonial
            name="Maria Uyeda"
            dialog="Ryker is an intelligent developer whose strength lies in his ability to solve complex problems through programming. He uses his vast understanding of algorithms and logic to creatively design products with a beautiful front-end and a clean back-end. I have worked on several teams with Ryker and witnessed his dedication for building meaningful programs that promote a more equal and just society. I would gladly work with Ryker again because of his programming expertise and his ability to bring a team together through strong leadership!"
            headshot="https://media.licdn.com/media/AAEAAQAAAAAAAAd9AAAAJDE0YzI2YzBiLTI1NGUtNDAzMy04MTMxLWFjNzI3NzU5YmQzMg.jpg"
            />
        </div>

      </div>
    );
  }
});
