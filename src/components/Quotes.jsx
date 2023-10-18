import { useState } from 'react';
import './Quotes.css'

const randomQuotes = [
  {
  text: "A room without booksis like a body without a soul",
  author: "Marcus Cicero"
  },
  {
    text: "You only live once but if you do it right once is enough",
    author: "Mae West"
  },
  {
    text: "Be the change you wish to see in the world",
    author: "Mathama Gandhi"
  },
  {
    text:"It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Success is liking yourself, liking what you do, and liking how you do it.",
    author: "Maya Angelou"

  }
]

  const Quotes = () => {
     const [Quote, setQuote] = useState({
       text: "Be yourself, everyone is taken",
       author: "Oscar Wilde"
     })

     const GenerateRandom = () => {
      const randomindex = Math.floor(Math.random () * randomQuotes.length)
      setQuote(randomQuotes[randomindex])
     }
      return (
        <div className='container'>
          <p>"{Quote.text}"</p>
          <h4> {Quote.author}</h4>
          <div className="horizontal"></div>
          <button onClick={GenerateRandom}>Click For More Quotes</button>
        </div>
      )
   
  }


export default Quotes