from datetime import datetime, timedelta, timezone

from lib.db import db

class CreateActivity:
  def run(message, cognito_user_id, ttl):
    model = {
      'errors': None,
      'data': None
    }

    now = datetime.now(timezone.utc).astimezone()

    if (ttl == '30-days'):
      ttl_offset = timedelta(days=30) 
    elif (ttl == '7-days'):
      ttl_offset = timedelta(days=7) 
    elif (ttl == '3-days'):
      ttl_offset = timedelta(days=3) 
    elif (ttl == '1-day'):
      ttl_offset = timedelta(days=1) 
    elif (ttl == '12-hours'):
      ttl_offset = timedelta(hours=12) 
    elif (ttl == '3-hours'):
      ttl_offset = timedelta(hours=3) 
    elif (ttl == '1-hour'):
      ttl_offset = timedelta(hours=1) 
    else:
      model['errors'] = ['ttl_blank']

    if cognito_user_id == None or len(cognito_user_id) < 1:
      model['errors'] = ['cognito_user_id_blank']

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
      expires_at = (now + ttl_offset)
      uuid = CreateActivity.create_activity(cognito_user_id,message,expires_at)
      object_json = CreateActivity.query_object_activity(uuid)
      model['data'] = object_json
    return model

  def create_activity(cognito_user_id, message, expires_at):
    sql = db.template('activities','create')
    uuid = db.query_commit(sql,{
      'cognito_user_id': cognito_user_id,
      'message': message,
      'expires_at': expires_at
    })
    return uuid
  def query_object_activity(uuid):
    sql = db.template('activities','object')
    return db.query_object_json(sql,{
      'uuid': uuid
    })