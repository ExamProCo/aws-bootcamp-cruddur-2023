#!/usr/bin/env python3
import time
import os
import sys

if len(sys.argv) == 2:
  name = sys.argv[1]
else:
  print("pass a filename: eg. ./bin/generate/migration hello")
  exit(0)

timestamp = str(time.time()).replace(".","")

filename = f"{timestamp}_{name}.py"

klass = name.replace('_', ' ').title().replace(' ','')

file_content = f"""
class {klass}Migration(Migration):
  def migrate_sql():
    data = \"\"\"
    \"\"\"
    return data
  def rollback_sql():
    data = \"\"\"
    \"\"\"
    return data
  def migrate():
    this.query_commit(this.migrate_sql(),{{
    }})
  def rollback():
    this.query_commit(this.rollback_sql(),{{
    }})
"""
file_content = file_content.lstrip('\n').rstrip('\n')

current_path = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.abspath(os.path.join(current_path, '..', '..','backend-flask','db','migrations',filename))
print(file_path)

with open(file_path, 'w') as f:
  f.write(file_content)