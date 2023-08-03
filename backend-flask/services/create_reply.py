import uuid
from datetime import datetime, timedelta, timezone
class CreateReply:
  def run(message, user_handle, activity_uuid):
    model = {
      'errors': None,
      'data': None
    }

    if user_handle == None or len(user_handle) < 1:
      model['errors'] = ['user_handle_blank']
from datetime import datetime, timedelta, timezone

from lib.db import db

class CreateReply:
  def run(message, cognito_user_id, activity_uuid):
    model = {
      'errors': None,
      'data': None
    }

    if cognito_user_id == None or len(cognito_user_id) < 1:
      model['errors'] = ['cognito_user_id_blank']

    if activity_uuid == None or len(activity_uuid) < 1:
      model['errors'] = ['activity_uuid_blank']

    if message == None or len(message) < 1:
      model['errors'] = ['message_blank'] 
    elif len(message) > 1024:
      model['errors'] = ['message_exceed_max_chars_1024'] 

    if model['errors']:
      # return what we provided
      model['data'] = {
        'message': message,
        'reply_to_activity_uuid': activity_uuid
      }
    else:
      uuid = CreateReply.create_reply(cognito_user_id,activity_uuid,message)

      object_json = CreateReply.query_object_activity(uuid)
      model['data'] = object_json
    return model

  def create_reply(cognito_user_id, activity_uuid, message):
    sql = db.template('activities','reply')
    uuid = db.query_commit(sql,{
      'cognito_user_id': cognito_user_id,
      'reply_to_activity_uuid': activity_uuid,
      'message': message,
    })
    return uuid
  def query_object_activity(uuid):
    sql = db.template('activities','object')
    return db.query_object_json(sql,{
      'uuid': uuid
    })