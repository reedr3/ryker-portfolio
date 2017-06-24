class ContactEmailsController < ApplicationController
  def new
    @contact_email = ContactEmail.new
  end

  def create
    @contact_email = ContactEmail.new(params[:contact_email])
    if @contact_email.save
      ContactMailer.contact_email("ryker", "test email", "test message").deliver_now
    end
  end
end
