var Contact = React.createClass({
  render: function() {
    return (
      <div>
        <h1>I'm a contact page!</h1>
        <form action='/contact_emails' method='post'>
          <input type='hidden' name='authenticity_token' value={this.props.authenticityToken} />
          <input type='text' name='name' />
          <input type='text' name='email' />
          <input type='text' name='message' />
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
});
