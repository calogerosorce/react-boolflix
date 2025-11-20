import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const api_key = import.meta.env.VITE_API
    const [film, setFilm] = useState([])
    const [serie, setSerie] = useState([])
    const [charats, setCharats] = useState([])
    /* const [filters, setFilters] = useState(null) */
    const [search, setSearch] = useState('')



    function fetchData() {
        const api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`
        const api_serie = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${search}`


        axios.get(api)
            .then(res => {
                const movieResults = res.data.results || []
                setFilm(movieResults)
                // Usa direttamente movieResults, non film
                setCharats(prev => [...prev, ...movieResults])
            })
            .catch(err => {
                console.log(err);
            })

        axios.get(api_serie)
            .then(res => {
                const tvResults = res.data.results || []
                setSerie(tvResults)
                // Usa direttamente tvResults, non serie
                setCharats(prev => [...prev, ...tvResults])
            })
            .catch(err => {
                console.log(err);
            })
    }


    function handleSubmit(e) {
        e.preventDefault()
        fetchData()

    }

    /*  useEffect(() => {
 
           const filterFilms = charats.filter(items => items.title.toLowerCase().includes(search.toLowerCase()))
           setFilters(filterFilms)
   
     }, [handleSubmit]) */

    const values = {
        search,
        setSearch,
        charats,
        handleSubmit,
        film
    }


    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalProvider() {

    return useContext(GlobalContext)
}



export { GlobalProvider, useGlobalProvider }