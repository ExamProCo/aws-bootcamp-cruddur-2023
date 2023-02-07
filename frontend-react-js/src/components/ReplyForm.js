import './ReplyForm.css';
import React from "react";
import process from 'process';
import {ReactComponent as BombIcon} from './svg/bomb.svg';

import ActivityContent  from '../components/ActivityContent';

export default function ReplyForm(props) {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState('');

  const classes = []
  classes.push('count')
  if (240-count < 0){
    classes.push('err')
  }

  const onsubmit = async (event) => {
    event.preventDefault();
    try {
      const backend_url = `${process.env.REACT_APP_BACKEND_URL}/api/activities/${props.activity_uuid}/reply`
      const res = await fetch(backend_url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          activity_uuid: props.activity_uuid,
          message: message
        }),
      });
      let data = await res.json();
      if (res.status === 200) {
        // add activity to the feed
        props.setActivities(current => [data,...current]);
        // reset and close the form
        setCount(0)
        setMessage('')
        props.setPopped(false)
      } else {
        console.log(res)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const textarea_onchange = (event) => {
    setCount(event.target.value.length);
    setMessage(event.target.value);
  }

  let content;
  console.log('pp',props.activity)
  if (props.activity){
    content = <ActivityContent activity={props.activity} />;
  }


  if (props.popped === true) {
    return (
      <div className="popup_form_wrap">
        <div className="popup_form">
          <div className="popup_heading">
          </div>
          <div className="popup_content">
            <div className="activity_wrap">
              {content}
            </div>
            <form 
              className='replies_form'
              onSubmit={onsubmit}
            >
              <textarea
                type="text"
                placeholder="what is your reply?"
                value={message}
                onChange={textarea_onchange} 
              />
              <div className='submit'>
                <div className={classes.join(' ')}>{240-count}</div>
                <button type='submit'>Crud</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}