class ContactEmailsController < ApplicationController
  def create
    @contact_email = ContactEmail.find(params[id])
  end
end
