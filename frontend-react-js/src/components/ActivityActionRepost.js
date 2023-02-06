import {ReactComponent as RepostIcon} from './svg/repost.svg';

export default function ActivityActionRepost(props) { 
  const onclick = (event) => {
    console.log('trigger repost')
  }

  return (
    <div onClick={onclick} className="action activity_action_repost">
      <RepostIcon className='icon' />
      <div className="counter">
        {props.count}
      </div>
    </div>
  )
}