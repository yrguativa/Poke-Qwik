import { component$,  } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';
import { usePokemonGame } from '~/hooks/use-pokemon-game';

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
    //const pokemon = useContext(PokemonGameContext);
    
    // v3.0 using custom hooks
    const { isPokemonVisible, showBackImage,  toggleFromBack, toggleVisible } = usePokemonGame();

    return (
        <>
            {/* pokemon id {location.params.id} */}
            <span class="text-5xl">Pokemon: { pokeId } </span>

            <PokemonImage 
                id={ pokeId.value }
                isVisible={ isPokemonVisible.value }
                backImage={ showBackImage.value }
            />

            <div class="mt-2">
                <button onClick$={toggleFromBack} class="btn btn-primary mr-2">Voltear</button>
                <button onClick$={toggleVisible} class="btn btn-primary">Revelar</button>
            </div>
        </>
    );
});