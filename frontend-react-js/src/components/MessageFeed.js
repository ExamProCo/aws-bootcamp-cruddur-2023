import './MessageFeed.css';
import MessageItem from './MessageItem';

export default function MessageFeed(props) {
  return (
    <div className='message_feed'>
      <div className='message_feed_heading'>
        <div className='title'>Messages</div>
      </div>
      <div className='message_feed_collection'>
        {props.messages.map(message => {
        return  <MessageItem key={message.uuid} message={message} />
        })}
      </div>
    </div>
  );
}