import './JoinSection.css';
import { Link } from "react-router-dom";

export default function JoinSection(props) {
  return (
    <div className="join">
      <div className='join-title'>
        Join The Party!
      </div>
      <div className='join-content'>
        <p>
          Have something you want to say?
        </p>
        <p>
          Don't think about it, just crud it!
        </p>
        <p>
          Regret it? No worries, We'll forget it...
        </p>
        <Link to="/signup" className="action">
          Join Now!
        </Link>
        <Link to="/signin" className="subaction">
          Sign In
        </Link>
      </div>
    </div>
  );
}