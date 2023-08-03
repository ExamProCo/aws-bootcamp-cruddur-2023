import { DateTime } from 'luxon';

export function format_datetime(value) {
  const datetime = DateTime.fromISO(value, { zone: 'utc' })
  const local_datetime = datetime.setZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  return local_datetime.toLocaleString(DateTime.DATETIME_FULL)
}

export function message_time_ago(value){
  const datetime = DateTime.fromISO(value, { zone: 'utc' })
  const created = datetime.setZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const now     = DateTime.now()
  const diff_mins = now.diff(created, 'minutes').toObject().minutes;
  const diff_hours = now.diff(created, 'hours').toObject().hours;

  if (diff_hours > 24.0){
    return created.toFormat("LLL L");
  } else if (diff_hours < 24.0 && diff_hours > 1.0) {
    return `${Math.floor(diff_hours)}h`;
  } else if (diff_hours < 1.0) {
    return `${Math.round(diff_mins)}m`;
  } else {
    console.log('dd', diff_mins,diff_hours)
    return 'unknown'
  }
}

export function time_ago(value){
  const datetime = DateTime.fromISO(value, { zone: 'utc' })
  const past = datetime.setZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const now     = DateTime.now()
  const diff_mins = now.diff(past, 'minutes').toObject().minutes;
  const diff_hours = now.diff(past, 'hours').toObject().hours;
  const diff_days = now.diff(past, 'days').toObject().days;

  if (diff_hours > 24.0){
    return `${Math.floor(diff_days)}d`;
  } else if (diff_hours < 24.0 && diff_hours > 1.0) {
    return `${Math.floor(diff_hours)}h`;
  } else if (diff_hours < 1.0) {
    return `${Math.round(diff_mins)}m`;
  }
}

export function time_future(value){
  const datetime = DateTime.fromISO(value, { zone: 'utc' })
  const future = datetime.setZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const now     = DateTime.now()
  const diff_mins = future.diff(now, 'minutes').toObject().minutes;
  const diff_hours = future.diff(now, 'hours').toObject().hours;
  const diff_days = future.diff(now, 'days').toObject().days;

  if (diff_hours > 24.0){
    return `${Math.floor(diff_days)}d`;
  } else if (diff_hours < 24.0 && diff_hours > 1.0) {
    return `${Math.floor(diff_hours)}h`;
  } else if (diff_hours < 1.0) {
    return `${Math.round(diff_mins)}m`;
  }
}