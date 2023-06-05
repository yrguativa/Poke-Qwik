import { $, component$, useContext } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';
import { PokemonGameContext } from '~/context';

export default component$(() => {

    /*
    * v1.0 using local signals
    const pokemonId = useSignal(1); // primitivos
    const showBackImage = useSignal(false);
    const showPokemon = useSignal(false);*/
    
    // V2.0 using context
    const pokemon = useContext(PokemonGameContext);

    const changePokemonId = $((value: number) => {
        if ((pokemon.pokemonId + value) <= 0) return;
        pokemon.pokemonId += value;
    })
    return (
        <>
            <span class="text-2xl">Buscador simple</span>
            <span class="text-9xl">{pokemon.pokemonId}</span>
            <PokemonImage id={pokemon.pokemonId} backImage={pokemon.showBackImage} isVisible={pokemon.isPokemonVisible}></PokemonImage>

            <div class="mt-2">
                <button onClick$={() => changePokemonId(-1)} class="btn btn-primary mr-2">Anterior</button>
                <button onClick$={() => changePokemonId(+1)} class="btn btn-primary mr-2">Siguiente</button>
                <button onClick$={() => pokemon.showBackImage = !pokemon.showBackImage} class="btn btn-primary mr-2">Voltear</button>
                <button onClick$={() => pokemon.isPokemonVisible = !pokemon.isPokemonVisible} class="btn btn-primary">Revelar</button>
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Poke Qwik',
    meta: [
        {
            name: 'description',
            content: 'This is my first App with Qwik'
        },
    ],
};
