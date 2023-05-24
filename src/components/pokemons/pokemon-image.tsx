import { component$, useComputed$, useSignal, useTask$ } from "@builder.io/qwik";
interface Props {
    id: number | string;
    size?: number
    backImage?: boolean
    isVisible?: boolean
}
export const PokemonImage = component$(({ id, size = 200, backImage = false, isVisible = false }: Props) => {
    const imageLoaded = useSignal(false);

    useTask$(({ track }) => {
        track(() => id);

        imageLoaded.value = true;
    })
    const imageUrl = useComputed$(() => {
        return ( backImage )
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${ id }.png`
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
    })
    return (
        <div class="flex items-center justify-center"
            style={{ width: `${size}px`, height: `${size}px` }}>
            {!imageLoaded.value && (<span class="text-5lg">Loading...</span>)}
            <img
                src={ imageUrl.value }
                alt="Image Pokemon"
                style={{ width: `${size}px` }}
                onLoad$={() => imageLoaded.value = true}
                class={[
                    {
                        'hidden': !imageLoaded.value,
                        'brightness-0': !isVisible
                    },
                    'transition-all'
                ]}
            />
        </div>
    )
}) 