import './ProfileAvatar.css';

export default function ProfileAvatar(props) {
  const backgroundImage = `url("https://assets.cruddursn.net/avatars/${props.id}.jpg")`;
  const styles = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div 
      className="profile-avatar"
      style={styles}
    ></div>
  );
}