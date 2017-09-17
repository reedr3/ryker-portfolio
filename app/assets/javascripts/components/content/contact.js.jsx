var Contact = React.createClass({
  render: function() {
    return (
      <div id="contact">
        <h1>Contact Me!</h1>
        <div id="contact-details">
          <p>Ryker Reed</p>
          <p>reedr@alum.mit.edu</p>
          <p>Boston, MA</p>
        </div>
        <form action='/contact_emails' method='post'>
          <input type='hidden' name='authenticity_token' value={this.props.authenticityToken} />
          <div id='form-name'>
            <label for='name'>Name: </label>
            <input type='text' name='name' placeholder='Your Name' />
          </div>
          <div id='form-email'>
            <label for='email'>Email: </label>
            <input type='text' name='email' placeholder='Your Email' />
          </div>
          <div id='form-message'>
            <label for='message'>Message: </label>
            <textarea name='message' placeholder='Your Message' ></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
});
