import './style.css'

function Child(props) {
  return (
    <div className='s'>
      <button onClick={props.greetHandler}>Greet</button>
    </div>
  )
}

export default Child