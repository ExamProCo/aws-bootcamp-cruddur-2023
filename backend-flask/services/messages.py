from datetime import datetime, timedelta
class Messages:
  def run(user_sender_handle, user_receiver_handle):
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
        'created_at': now.isoformat('#'),
        'expires_at': (now + timedelta(minutes=30)).isoformat('#')  # 30 minutes
      },
      {
        'display_name': 'Andrew Brown',
        'handle':  'andrewbrown',
        'message': 'This platform is great!',
        'created_at': now.isoformat('#'),
        'expires_at': (now + timedelta(minutes=60)).isoformat('#')  # 1 hour
    }]
    model['data'] = results
    return model