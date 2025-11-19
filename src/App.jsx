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
          <p>{items.original_title}</p>
        ))}
      </main>
    </>
  )
}

export default App
