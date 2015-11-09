class TodoController < ApplicationController
  skip_before_action :verify_authenticity_token
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
    @todo.save

      render json: @todo

  end

  def update
  	@todo = Todo.find(params[:id])
    @todo.update(todo_params)
  	
  end

  def destroy
    @todo = Todo.find(params[:id])
  	@todo.destroy
  	
end

  private
  	def set_todo
  		@todo =Todo.find(params[:id])
  	end

  	def todo_params
  		params.require(:todo).permit(:name, :endDate, :endTime, :isFinished)
  	end
end

