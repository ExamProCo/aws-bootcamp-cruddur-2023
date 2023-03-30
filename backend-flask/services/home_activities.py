from datetime import datetime, timedelta, timezone
from lib.db import db
# Honeycomb 
from opentelemetry import trace
tracer = trace.get_tracer("home.activities")

# CloudWatch
import logging

class HomeActivities:
  #def run(logger): # CloudWatch 
  def run(cognito_user_id=None):
    sql = db.template('activities','home')

    results = db.query_array_json(sql)

    return results