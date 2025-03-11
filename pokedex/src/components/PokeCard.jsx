import { useEffect, useState } from "react";
import { getFullPokedexNumber, getPokedexNumber } from "../utils";
import TypeCard from "./TypeCard";

export default function PokeCard(props) {
    const { selectedPokemon } = props;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const { name, height, abilities, stats, types, moves, sprites } = data || {};

    useEffect(() => {
        if (loading || !localStorage) { return; }

        let cache = {};
        if (localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokemon')); // Note: 'pokemon' not 'pokedex'
        }

        if (selectedPokemon in cache) {
            setData(cache[selectedPokemon]);
            return;
        } 

        async function fetchPokemonData() {
            setLoading(true);
            try {
                const baseUrl = 'https://pokeapi.co/api/v2/';
                const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon);
                const finalUrl = baseUrl + suffix;

                const res = await fetch(finalUrl);
                const pokemonData = await res.json();
                setData(pokemonData);

                cache[selectedPokemon] = pokemonData;
                localStorage.setItem('pokemon', JSON.stringify(cache));

            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPokemonData();
    }, [selectedPokemon]);

    if (loading) {
        return <h4>Loading...</h4>;
    }


    return (
        <div className="poke-card">
            <div>
                <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2>{name}</h2>
            </div>
            <div className="type-container">
                {types && types.map((typeObj, typeIndex) => (
                    <TypeCard key={typeIndex} type={typeObj?.type?.name} />
                ))}
            </div>
            <img src="{/pokemon/" alt={name + " image"} />
        </div>
    );
}