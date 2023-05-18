import { component$, useSignal, useTask$ } from "@builder.io/qwik";
interface Props {
    id: number;
    size?: number
    backImage: boolean
    isVisible: boolean
}
export const PokemonImage = component$(({ id, size = 200, backImage, isVisible }: Props) => {
    const imageLoaded = useSignal(false);

    useTask$(({ track }) => {
        track(() => id);

        imageLoaded.value = false;
    })
    return (
        <div class="flex items-center justify-center"
            style={{ width: `${size}px`, height: `${size}px` }}>
            {!imageLoaded.value && (<span class="text-5lg">Loading...</span>)}
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${backImage ? `back/${id}` : id}.png`}
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