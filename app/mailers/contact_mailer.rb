class ContactMailer < ApplicationMailer
  default from: ENV["MAILER_EMAIL"]

  def contact_email(name, email, message)
    @name = name
    @email = email
    @message = message
    mail(to: "ryker.reed3@gmail.com", subject: "This is the subject")
  end
end
