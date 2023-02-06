from datetime import datetime, timedelta
class MessageGroups:
  def run(user_handle):
    model = {
      'errors': None,
      'data': None
    }

    now = datetime.now()
    results = [
      {
        'display_name': 'Andrew Brown',
        'handle':  'andrewbrown',
        'message': 'Cloud is fun!',
        'created_at': now.isoformat('#')
      },
      {
        'display_name': 'Andrew Brown',
        'handle':  'andrewbrown',
        'message': 'This platform is great!',
        'created_at': now.isoformat('#')
    }]
    model['data'] = results
    return model