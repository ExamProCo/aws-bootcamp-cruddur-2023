class CreateMessage:
  def run(message, user_sender_handle, user_reciever_handle):
    model = {
      'errors': None,
      'data': None
    }
    if user_sender_handle_blank == None or len(user_sender_handle_blank) < 1:
      model['errors'] = ['user_sender_handle_blank']

    if user_reciever_handle_blank == None or len(user_reciever_handle_blank) < 1:
      model['errors'] = ['user_reciever_handle_blank']

    if message == None or len(message) < 1:
      model['errors'] = ['message_blank'] 
    elif len(message) > 1024:
      model['errors'] = ['message_exceed_max_chars'] 

    if model['errors']:
      # return what we provided
      model['data'] = {
        'sender_handle':  user_sender_handle,
        'reciever_handle':  user_reciever_handle,
        'message': message
      }   
    else:
      model['data'] = {
        'sender_handle':  user_sender_handle,
        'reciever_handle':  user_reciever_handle,
        'message': message
      }