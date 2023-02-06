import './TrendingsSection.css';
import TrendItem from '../components/TrendItem';

export default function TrendingsSection(props) {
  return (
    <div className="trendings">
      <div className='trendings-title'>
        Trending
      </div>
      {props.trendings.map(trending => {
        return <TrendItem key={trending.hashtag} hashtag={trending.hashtag} count={trending.count} />
      })}
    </div>
  );
}