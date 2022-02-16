import { Message } from './components'
import { Button } from './components'

const onClick = () => {
  console.log("клик")
}

function App() {
  return (
    <div className="App">
      <Message text={'lorem ipsum dolor sit am'}>
        lorem ipsum dolor sit amet
      </Message>

      <Button onClick={onClick} text={'Button for example'}> </Button>

    </div>
  );
}

export default App;
