class MessagesController < ApplicationController
  protect_from_forgery :except => [:create]

  def index
    messages = Message.all
    render json: messages
  end

  def create
    message = Message.create(text: params[:text])
    render json: message
  end
end
