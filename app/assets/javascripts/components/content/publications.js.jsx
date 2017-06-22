var Publications = React.createClass({
  render: function() {
    return (
      <div id="publications">
        <Publication
          title="The Turing Test"
          description1="I wrote and published a science fiction novella. It won the MIT Louis Kampf Writing Prize in Women's and Gender Studies."
          description2="Sam is a college student who loves virtual reality. Alan is an android looking for a place in the world. After a chance meeting, a fast friendship blossoms between them. Even though much has advanced by the year 2040, the world is still not always kind to the ones it doesn’t understand. The two friends unearth many questions for themselves and for society, questions of what it means to be human, and what it means to be true to yourself."
          image="https://s-media-cache-ak0.pinimg.com/736x/51/a6/a7/51a6a7af68bf9dd792645ceb248ebd68.jpg"
          imageCaption="Front Cover"
          liveApp="http://gametheprogress.herokuapp.com/"
          liveAppName="Kindle Store"
        />
      </div>
    );
  }
});
