import { component$, useContext } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';
import { PokemonGameContext } from '~/context';

export const usePokemonId = routeLoader$<number>(({ params, redirect }) => {
    const id = Number(params.id);
    if (isNaN(id)) {
        redirect(301, '/')
    }

    return id;
});

export default component$(() => {
    //const location = useLocation();
    const pokeId = usePokemonId();

    // V2.0 using context
    const pokemon = useContext(PokemonGameContext);
    
    return (
        <>
            {/* pokemon id {location.params.id} */}
            <samp>id : {pokeId}</samp>
            <PokemonImage id={pokeId.value} backImage={pokemon.showBackImage} isVisible={pokemon.isPokemonVisible}></PokemonImage>
        </>
    );
});