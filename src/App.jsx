import Head from "./components/header.jsx"
import Card from "./components/Card.jsx"
import Foot from "./components/Footer.jsx"

import arr from "./assets/array.js"


const addCard = () => {
  return arr.map((curPost) =>

    <Card
      title={curPost.title}
      img={(`${curPost.image}`) || "image404.jpg"}
      content={curPost.content}
      tags={curPost.tags}
      publish={curPost.published}
      id={curPost.id}
    />


  )
}

function App() {
  return (
    <>
      <Head />
      <div className="container">
        {addCard()}
      </div>
      <Foot />
    </>)
}

export default App
