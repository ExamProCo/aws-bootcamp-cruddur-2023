from psycopg_pool import ConnectionPool
import os, sys, re
from flask import current_app as app

class Db:
  def __init__(self):
    self.init_pool()

  def template(self,*args):
    pathing = list((app.root_path,'db','sql',) + args)
    pathing[-1] = pathing[-1] + ".sql"

    template_path = os.path.join(*pathing)

    green = '\033[92m'
    no_color = '\033[0m'
    print("\n")
    print(f'{green} Load SQL Template: {template_path} {no_color}')

    with open(template_path, 'r') as f:
      template_content = f.read()
    return template_content

  def init_pool(self):
    connection_url = os.getenv("PROD_CONNECTION_URL")
    self.pool = ConnectionPool(connection_url)
  # when we want to commit data such as an insert
  # be sure to check for RETURNING in all uppercases
  def query_commit(self,sql,*kwargs):

    self.print_sql('commit with returning',sql)

    pattern = r"\bRETURNING\b"
    is_returning_id = re.search(pattern, sql)
    if is_returning_id:
      print("Found a match")
    else:
      print("No match found")

    try:
      conn =  self.pool.connection()
      cur = conn.cursor()
      cur.execute(sql, kwargs)
      if is_returning_id:
        returning_id = cur.fetchone()[0]
      conn.commit()
      if is_returning_id:
        return returning_id
    except Exception as error:
      self.print_sql_err(error)
      #conn.rollback

  def print_sql(self,title,sql):
    cyan = '\033[96m'
    no_color = '\033[0m'
    print(f'{cyan} SQL STATEMENT-[{title}]------{no_color}')
    print(sql)

  def query_wrap_object(self,template):
    sql = f"""
    (SELECT COALESCE(row_to_json(object_row),'{{}}'::json) FROM (
    {template}
    ) object_row);
    """
    return sql

  def query_wrap_array(self,template):
    sql = f"""
    (SELECT COALESCE(array_to_json(array_agg(row_to_json(array_row))),'[]'::json) FROM (
    {template}
    ) array_row);
    """
    return sql

  #When we want to return a json object
  def query_array_json(self, sql):
    print("BEGIN : sql statement-[array]--------")
    print(sql)
    print("END : sql statement---------")
    wrapped_sql = self.query_wrap_array(sql)
    with self.pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(wrapped_sql)
        # this will return a tuple
        # the first field being the data
        json = cur.fetchone()
        return json[0]


  #When we want to return an array of json objects
  def query_object_json(self,sql):
    print("BEGIN : sql statement-[object]--------")
    print(sql)
    print("END : sql statement---------")
    wrapped_sql = self.query_wrap_object(sql)
    with self.pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(wrapped_sql)
        # this will return a tuple
        # the first field being the data
        json = cur.fetchone()
        return json[0]


  def print_sql_err(self,err):
    # get details about the exception
    err_type, err_obj, traceback = sys.exc_info()

    # get the line number when exception occured
    line_num = traceback.tb_lineno

    # print the connect() error
    print ("\npsycopg ERROR:", err, "on line number:", line_num)
    print ("psycopg traceback:", traceback, "-- type:", err_type)

    # print the pgcode and pgerror exceptions
    #print ("pgerror:", err.pgerror)
    #print ("pgcode:", err.pgcode, "\n")

db = Db()