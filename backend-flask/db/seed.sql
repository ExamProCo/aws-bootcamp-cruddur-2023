-- this file was manually created
INSERT INTO public.users (display_name, email, handle, cognito_user_id)
VALUES
  ('s bijuli','bijuli74@gmail.com', 'sb', 'MOCK'),
  ('Rustin Bond', 'rust_bondcr007@yahoo.com', 'rust' , 'MOCK');

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'sb' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )