import { ParentComponent } from "solid-js";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Page: ParentComponent<{}> = (props) => {

  return <div class="grid grid-rows-[min-content_1fr] h-screen gap-2 relative">
    <Header />
    <main class=" p-4 lg:px-24">
      {props.children}
    </main>
    <Footer />
  </div>;
};