import {ReactComponent as ShareIcon} from './svg/share.svg';

export default function ActivityActionRepost(props) { 
  const onclick = (event) => {
    console.log('trigger share')
  }

  return (
    <div onClick={onclick} className="action activity_action_share">
      <ShareIcon className='icon' />
    </div>
  )
}