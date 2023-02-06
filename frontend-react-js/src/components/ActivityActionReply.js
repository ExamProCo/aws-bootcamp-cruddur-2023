import {ReactComponent as ReplyIcon} from './svg/reply.svg';

export default function ActivityActionRepost(props) { 
  const onclick = (event) => {
    console.log('trigger reply')
  }

  return (
    <div onClick={onclick} className="action activity_action_reply">
      <ReplyIcon className='icon' />
      <div className="counter">
        {props.count}
      </div>
    </div>
  )
}