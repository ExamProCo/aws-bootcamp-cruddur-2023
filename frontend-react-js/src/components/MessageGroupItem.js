import './MessageGroupItem.css';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { format_datetime, message_time_ago, time_ago } from '../lib/DateTimeFormats';

export default function MessageGroupItem(props) {
  const params = useParams();

  const classes = () => {
    let classes = ["message_group_item"];
    if (params.message_group_uuid == props.message_group.uuid){
      classes.push('active')
    }
    return classes.join(' ');
  }

  return (
    <Link className={classes()} to={`/messages/`+props.message_group.uuid}>
      <div className='message_group_avatar'></div>
      <div className='message_content'>
        <div classsName='message_group_meta'>
          <div className='message_group_identity'>
            <div className='display_name'>{props.message_group.display_name}</div>
            <div className="handle">@{props.message_group.handle}</div>
          </div>{/* activity_identity */}
        </div>{/* message_meta */}
        <div className="message">{props.message_group.message}</div>
        <div className="created_at" title={format_datetime(props.message_group.created_at)}>
          <span className='ago'>{message_time_ago(props.message_group.created_at)}</span> 
        </div>{/* created_at */}
      </div>{/* message_content */}
    </Link>
  );
}