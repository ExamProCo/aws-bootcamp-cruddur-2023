import './ActivityItem.css';

import ActivityContent  from '../components/ActivityContent';
import ActivityActionReply  from '../components/ActivityActionReply';
import ActivityActionRepost  from '../components/ActivityActionRepost';
import ActivityActionLike  from '../components/ActivityActionLike';
import ActivityActionShare  from '../components/ActivityActionShare';

export default function ActivityItem(props) {

  let replies;
  if (props.activity.replies) {
    replies = <div className="replies">
                {props.activity.replies.map(reply => {
                return  <ActivityItem 
                  setReplyActivity={props.setReplyActivity} 
                  setPopped={props.setPopped} 
                  key={reply.uuid} 
                  activity={reply} 
                  />
                })}
              </div>
  }

  return (
    <div className='activity_item'>
      <ActivityContent activity={props.activity} />
      <div className="activity_actions">
        <ActivityActionReply setReplyActivity={props.setReplyActivity} activity={props.activity} setPopped={props.setPopped} activity_uuid={props.activity.uuid} count={props.activity.replies_count}/>
        <ActivityActionRepost activity_uuid={props.activity.uuid} count={props.activity.reposts_count}/>
        <ActivityActionLike activity_uuid={props.activity.uuid} count={props.activity.likes_count}/>
        <ActivityActionShare activity_uuid={props.activity.uuid} />
      </div>
      {replies}
    </div>
  );
}