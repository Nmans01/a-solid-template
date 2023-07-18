import { A } from "@solidjs/router";
import { Component, ParentComponent } from "solid-js";

export const Header: Component<{}> = (props) => {

  return <header class="p-4 lg:px-24 bg-green-600 flex justify-between items-center">
    <A href="/" class="p-1 text-xl">
      A Solid Template
    </A>
    <nav class="flex gap-4 ">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
    </nav>
  </header>;
};

// An example of a helper component definition
const NavLink: ParentComponent<{ href: string }> = (props) => {

  return <A
    href={props.href}
    class="hover:underline p-1 border-2 border-transparent open:bg-white"
    activeClass=" border-dotted border-white"
    end
  >
    {props.children}
  </A>;
};