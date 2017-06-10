class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
    @blocks = Block.where(category_id: @category.id)
  end

end
