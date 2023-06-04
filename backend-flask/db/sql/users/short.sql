SELECT
  users.uuid,
  users.handle,
  users.display_name
FROM public.users
WHERE 
  users.handle = %(handle)s