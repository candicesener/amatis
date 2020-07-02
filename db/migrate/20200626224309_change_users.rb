class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :img_url, :string
    add_column :users, :username, :string, null: false
    remove_column :users, :first_name, :string
    remove_column :users, :last_name, :string
  end
end
