import Header from "./components/Header"
import { useGlobalProvider } from "./GlobalContext"

function App() {
  const { filters } = useGlobalProvider()
  console.log(filters);

  return (
    <>
      <Header />
      <main>

        {filters.map(items => (
          <div className="container">
            <p>{items.original_title}</p>
            <p>{items.title}</p>
            <p>{items.original_language}</p>
            <p>{items.vote_average}</p>
          </div>
        ))}

      </main>
    </>
  )
}

export default App
