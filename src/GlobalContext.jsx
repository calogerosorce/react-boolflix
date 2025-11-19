import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const api_key = import.meta.env.VITE_API
    const [charats, setCharts] = useState([])
    const [filters, setFilters] = useState(charats)
    const [search, setSearch] = useState('')


    function handleSubmit(e) {
        e.preventDefault()

    }
    function fetchData() {

        axios.get(api)
            .then(res => {
                setCharts(res.data.results)
            }).catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchData()
        if (search.length > 0) {
            const filterFilms = charats.filter(items => items.title.toLowerCase().includes(search.toLowerCase()))
            setFilters(filterFilms)
        } else {
            setFilters(charats)
        }
    }, [handleSubmit])

    const api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`

    const values = {
        search,
        setSearch,
        filters,
        handleSubmit
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