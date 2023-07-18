import { Component, createSignal } from "solid-js";
import { Page } from "../../common/components";

export const Landing: Component<{}> = (props) => {

    return <Page>
        <div class="flex items-center justify-center gap-8 h-full">
            <CountBox />
            <pre class="text-sm -mr-12">{`const CountBox: Component<{}> = (props) => {

const [count, setCount] = createSignal(0);

return <div class="flex flex-col items-center w-min">
    <button
        class="bg-green-300 active:scale-95 transition-transform p-6 inline-block whitespace-nowrap"
        onClick={() => setCount(count() + 1)}
    >
        Click me!
        Count: {count()}
    </button>
    <button
        class="bg-red-300 active:scale-95 transition-transform p-1 w-full"
        onClick={() => setCount(0)}
    >
        Reset
    </button>
</div>;
};`}</pre>
        </div>
        
        
    </Page>;
};

const CountBox: Component<{}> = (props) => {

    const [count, setCount] = createSignal(0);

    return <div class="flex flex-col items-center w-min">
        <button
            class="bg-green-300 active:scale-95 transition-transform p-6 inline-block whitespace-nowrap"
            onClick={() => setCount(count() + 1)}
        >
            Click me!
            Count: {count()}
        </button>
        <button
            class="bg-red-300 active:scale-95 transition-transform p-1 w-full"
            onClick={() => setCount(0)}
        >
            Reset
        </button>
    </div>;
};