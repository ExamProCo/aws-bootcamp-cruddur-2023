-- this file was manually created
INSERT INTO public.users (display_name, handle, email, cognito_user_id)
VALUES
  ('Papa Moussa FALL', 'papamfall' ,'papemfall@gmail.com','MOCK'),
  ('Sokhna Ngom', 'sokhnangom', 'sokhnangom@gmail.com' ,'MOCK');

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'papamfall' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )