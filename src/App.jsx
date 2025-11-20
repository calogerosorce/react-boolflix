import Header from "./components/Header"
import { useGlobalProvider } from "./GlobalContext"
import "flag-icons/css/flag-icons.min.css";
function App() {
  const { charats } = useGlobalProvider()
  let voteFinal = []
  for (let i = 0; i < charats.length; i++) {
    const vote = parseInt(charats[i].vote_average / 2)
    const restVote = parseInt(5 - vote)
    if (vote) {
      voteFinal.push("⭐".repeat(vote))
      if (restVote > 0) {
        voteFinal[voteFinal.length - 1] += "☆".repeat(restVote)
      }
    } else {
      voteFinal.push("N/A")
    }
  }

  let flagFinal = []
  for (let i = 0; i < charats.length; i++) {
    const flag = charats[i].original_language
    if (flag) {
      flagFinal.push(`fi fi-${flag}`)
    } else {
      flagFinal.push("N/A")
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="container content">
          <div className="row gap-4 d-flex justify-content-center">
            {charats.map(items => (
              <div key={items.id} className="card col-6 col-md-2 col-lg-3 align-items-center m-2">
                <img src={`https://image.tmdb.org/t/p/original/${items.poster_path}`} alt="" />
                <div className="text d-none">
                  <p>{items.title}</p>
                  <p>{items.original_title}</p>
                  <span className={flagFinal[charats.indexOf(items)]}></span>
                  <p>{voteFinal[charats.indexOf(items)]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main >
    </>
  )
}

export default App
