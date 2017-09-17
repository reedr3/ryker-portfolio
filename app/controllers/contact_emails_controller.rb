class ContactEmailsController < ApplicationController
  def new
    @contact_email = ContactEmail.new
  end

  def create
    @contact_email = ContactEmail.new(name: params[:name], email: params[:email], message: params[:message])
    if @contact_email.save
      ContactMailer.contact_email(@contact_email.name, @contact_email.email, @contact_email.message).deliver_now
      redirect_to '/pages/6'
    end
  end
end
