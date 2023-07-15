import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonData {
    results: Pokemon[]
}

const fetchingThePokemon = async () => {
    const res = await axios.get<PokemonData>('https://pokeapi.co/api/v2/pokemon/');
    return res.data;
}

const usePokemon = () => {
    return useQuery<PokemonData>({
        queryKey: ['pokemon'],
        queryFn: fetchingThePokemon
    })
}

export default usePokemon