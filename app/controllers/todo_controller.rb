class TodoController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]
  def index
  	@todos =Todo.all
  	render json: @todos
  end
  
  def show
  	render json: @todo
  end
  
  def create
  	@todo = Todo.new(todo_params)

  	render json: @todo
  end

  def update
  	@todo = Todo.find(params[:id])
  	heaad :no_content
  end

  def destroy
  	@todo.destroy
  	head :no_content
end

  private
  	def set_todo
  		@todo =Todo.find(params[:id])
  	end

  	def todo_params
  		params.require(:todo).permit(:name, :endDate, :endTime, :isFinished)
  	end
end

