import './CrudButton.css';

export default function CrudButton(props) {
  const pop_activities_form = (event) => {
    props.setPopped(true);
  }

  return (
    <button onClick={pop_activities_form} className='post' href="#">Crud</button>
  );
}