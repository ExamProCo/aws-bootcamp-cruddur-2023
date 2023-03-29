    INSERT INTO public.activities(
    user_uuid,
    message,
    expires_at
    )
    VALUES(
      (SELECT uuid from public.users WHERE users.handle = %(handle)s LIMIT 1),
      %(message)s,
      %(expires_at)s
    ) RETURNING uuid; 