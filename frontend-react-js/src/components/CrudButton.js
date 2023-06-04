import './CrudButton.css';

export default function CrudButton(props) {
  const pop_activities_form = (event) => {
    event.preventDefault();
    props.setPopped(true);
    return false;
  }

  return (
    <button onClick={pop_activities_form} className='post' href="#">Crud</button>
  );
}