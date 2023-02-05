from datetime import datetime
class SearchActivities:
  def run(search_term):
    model = {
      'errors': None,
      'data': None
    }
    if search_term == None or len(search_term) < 1:
      model['errors'] = ['search_term_blank']
    else:
      results = [{
        'handle':  'Andrew Brown',
        'message': 'Cloud is fun!',
        'created_at': datetime.now().isoformat('#')
      }]
      model['data'] = results
    return model