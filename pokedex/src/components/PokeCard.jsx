import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { TypeCard } from "./TypeCard";

export function PokeCard(props) {
    const { selectedPokemon } = props
    const {data, setData} = useState(null)
    const {loading, setLoading} = useState(false)

    useEffect(() => {
        // if loading, exit logic
        if (loading || !localStorage) { return }
        // check if the pokemon is avalible in cache
        // 1. define the casche
        let cache = {}
        if (localStorage.getItem('pokedex')) {
            cache = JSON.parse.localStorage.getItem('pokemon')
        }

        // 2. check if the pokemon is in cache

        if (selectedPokemon in cache) {
            // return from cache
            setData(cache[selectedPokemon])
            return
        } else {

        }

        // if we fetch from the api, save the information to the cache
    }, [selectedPokemon])

    return (
        <div>      
            <TypeCard {...props} />
            <Modal {...props} />
        </div>
    )
}