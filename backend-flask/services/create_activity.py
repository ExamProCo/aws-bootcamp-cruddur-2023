from datetime import datetime
class CreateActivity:
  def run(message, user_handle):
    model = {
      'errors': None,
      'data': None
    }
    if user_handle == None or len(user_handle) < 1:
      model['errors'] = ['user_handle_blank']

    if message == None or len(message) < 1:
      model['errors'] = ['message_blank'] 
    elif len(message) > 280:
      model['errors'] = ['message_exceed_max_chars'] 

    if model['errors']:
      model['data'] = {
        'handle':  user_handle,
        'message': message
      }   
    else:
      model['data'] = {
        'handle':  user_handle,
        'message': message,
        'created_at': datetime.now().isoformat('#')
      }
    return model