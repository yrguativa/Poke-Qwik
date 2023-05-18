import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    const pokemonId = useSignal(1); // primitivos

    return (
        <>
            <span class="Text-5xl">Hola Mundo</span>

            <span class="text-2xl">Buscador simple</span>
            <span class="text-9xl">{pokemonId}</span>

            {/* TODO: Crear imagen pockemon*/}

            <div class="mt-2">
                <button class="btn btn-primary mr-2">Anterior</button>
                <button class="btn btn-primary">Siguiente</button>
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
