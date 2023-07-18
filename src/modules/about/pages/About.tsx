import { Component, For, ParentComponent } from "solid-js";
import { Page } from "../../common/components";

export const About: Component<{}> = (props) => {

    return <Page>
        <section class="flex flex-col gap-2">
            <p>This project was made to encapsulate my frontend stack, as well as demonstrate some basic practices that I have found useful.</p>
            <p>The packages included in this template are as follows:</p>
            <div class="flex gap-1">
                <For each={["TypeScript", "SolidJS", "SolidJS/Router", "Vite", "TailwindCSS", "Motion One"]}>{(it) =>
                    <Bubble>{it}</Bubble>
                }</For>
            </div>
            <p>My editor of choice is VSCode. Some extensions I find useful are:</p>
            <div class="flex gap-1">
                <For each={["SolidJS Snippets","Close All"]}>{(it) =>
                    <Bubble>{it}</Bubble>
                }</For>
            </div>
            <p>
                I use a module-based file structure for my Solid projects.
                Boilerplate files such as App.tsx and index.tsx live at the root of the src folder.
                All other files are grouped into modules, which are folders that contain separate folders for pages, components, utility functions, and types.
                This structure allows for easy navigation and separation of concerns, and ensures relevant files live close to where they will be imported and used. 
                For cleaner import statements, each subfolder has an index.ts file that exports all of its contents. Additionally, modules may contain submodules, which contain their own pages, components, etc.
            </p>
        </section>
    </Page>;
};

const Bubble: ParentComponent<{}> = (props) => {

    return <div class="text-sm bg-green-400 rounded-full p-0.5 px-2 inline-flex items-center"><span>{props.children}</span></div>;
};