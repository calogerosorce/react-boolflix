import Header from "./components/Header"
import axios from "axios"
import { useEffect } from "react"

function App() {
  const api_key = import.meta.env.VITE_API
  const api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=ritorno+al+futuro`

  function fetchData() {

    axios.get(api)
      .then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      })
  }
  useEffect(fetchData, [])

  return (
    <>
      <Header />
    </>
  )
}

export default App
