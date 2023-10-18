import "./App.css"
import Quotes from "./components/Quotes"


const App = ({author}, {text}) => {
  return (
    <div>
      
      
      <Quotes  text ={text} author={author}></Quotes>
    </div>
  )
}
export default App