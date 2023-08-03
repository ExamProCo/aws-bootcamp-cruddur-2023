import './ActivityContent.css';

import { Link } from "react-router-dom";
import {ReactComponent as BombIcon} from './svg/bomb.svg';
import { format_datetime, time_future, time_ago } from '../lib/DateTimeFormats';

export default function ActivityContent(props) {

  let expires_at;
  if (props.activity.expires_at) {
    expires_at =  <div className="expires_at" title={format_datetime(props.activity.expires_at)}>
                    <BombIcon className='icon' />
                    <span className='ago'>{time_future(props.activity.expires_at)}</span>
                  </div>

  }

  return (
    <div className='activity_content_wrap'>
      <div className='activity_avatar'></div>
      <div className='activity_content'>
        <div className='activity_meta'>
          <Link className='activity_identity' to={`/@`+props.activity.handle}>
            <div className='display_name'>{props.activity.display_name}</div>
            <div className="handle">@{props.activity.handle}</div>
          </Link>/* activity_identity */
          <div className='activity_times'>
            <div className="created_at" title={format_datetime(props.activity.created_at)}>
              <span className='ago'>{time_ago(props.activity.created_at)}</span> 
            </div>
            {expires_at}
          </div>{/* activity_times */}
        </div>{/* activity_meta */}
        <div className="message">{props.activity.message}</div>
      </div>{/* activity_content */}
    </div>
  );
}