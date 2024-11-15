class RemoveTextFromTodo < ActiveRecord::Migration[8.0]
  def change
    remove_column :todos, :text, :string
  end
end
