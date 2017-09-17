Rails.application.routes.draw do
  resources :contact_emails
  resources :categories, path: "pages" do
    resources :blocks
  end

  root :to => "categories#show", :id => '1'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
