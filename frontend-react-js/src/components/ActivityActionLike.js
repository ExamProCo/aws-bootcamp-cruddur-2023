import {ReactComponent as HeartIcon} from './svg/heart.svg';

export default function ActivityActionLike(props) { 
  const onclick = (event) => {
    console.log('toggle like/unlike')
  }

  return (
    <div onClick={onclick} className="action activity_action_heart">
      <HeartIcon className='icon' />
      <div className="counter">
        {props.count}
      </div>
    </div>
  )
}