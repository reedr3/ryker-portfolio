class CreateBlocks < ActiveRecord::Migration[5.1]
  def change
    create_table :blocks do |t|
      t.text :header
      t.text :image
      t.text :description
      t.integer :category_id

      t.timestamps
    end
  end
end
