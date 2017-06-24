class ContactMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def contact_email(name, email, message)
    @name = name
    @email = email
    @message = message
    mail(to: "ryker.reed3@gmail.com", subject: 'Test Subject Line')
  end
end
