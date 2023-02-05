import './TrendItem.css';

export default function TrendItem(props) {
  const commify = (n) => {
    var parts = n.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
  }

  return (
    <a className="trending" href="#">
      <span className="hashtag">#{props.hashtag}</span>
      <span className="count">#{commify(props.count)} cruds</span>
    </a>
  );
}