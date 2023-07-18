import { Component } from "solid-js";

export const Footer: Component<{}> = (props) => {
  
  return <footer class="bg-gray-800 text-white absolute top-[100%] w-full p-8 px-20 shadow-inner flex justify-between">
    <div><span class="font-bold">A Solid Template</span> by <a href="https://github.com/Nmans01" class="underline">nmans01</a></div>
    <span>ඞ</span>
  </footer>;
};