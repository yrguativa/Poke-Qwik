import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';

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
    return (
        <>
            {/* pokemon id {location.params.id} */}
            <samp>id : {pokeId}</samp>
            <PokemonImage id={pokeId.value} isVisible></PokemonImage>
        </>
    );
});