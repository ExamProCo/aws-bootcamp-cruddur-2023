import './MessageGroupFeed.css';
import MessageGroupItem from './MessageGroupItem';
import MessageGroupNewItem from './MessageGroupNewItem';
export default function MessageGroupFeed(props) {
  let message_group_new_item;
  if (props.otherUser) {
    message_group_new_item = <MessageGroupNewItem user={props.otherUser} />
  }

  return (
    <div className='message_group_feed'>
      <div className='message_group_feed_heading'>
        <div className='title'>Messages</div>
      </div>
      <div className='message_group_feed_collection'>
        {message_group_new_item}
        {props.message_groups.map(message_group => {
        return  <MessageGroupItem key={message_group.uuid} message_group={message_group} />
        })}
      </div>
    </div>
  );
}