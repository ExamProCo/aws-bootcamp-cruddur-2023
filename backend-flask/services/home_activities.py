from datetime import datetime, timedelta, timezone
from lib.db import pool,query_wrap_array
# Honeycomb 
from opentelemetry import trace
tracer = trace.get_tracer("home.activities")

# CloudWatch
import logging

class HomeActivities:
  #def run(logger): # CloudWatch 
  def run(cognito_user_id=None):
    sql = query_wrap_array("""
    select * from activities
    """)
    print(sql)
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(sql)
        # this will return a tuple
        # the first field being the data
        json = cur.fetchone()
    print("===--------------")
    print(json)
    return json[0]
    return results