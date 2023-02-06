from datetime import datetime
class UserActivities:
  def run(user_handle):
    model = {
      'errors': None,
      'data': None
    }
    if user_handle == None or len(user_handle) < 1:
      model['errors'] = ['blank_user_handle']
    else:
      results = [{
        'uuid': '248959df-3079-4947-b847-9e0892d1bab4',
        'handle':  'Andrew Brown',
        'message': 'Cloud is fun!',
        'created_at': datetime.now().isoformat('#')
      }]
      model['data'] = results
    return model