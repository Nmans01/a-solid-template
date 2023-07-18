import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import { About } from './modules/about/pages';
import { Landing } from './modules/landing/pages';

const App: Component = () => {
  return <div class="  min-h-screen m-0">
    <Routes>
      <Route path="/" component={Landing} />
      <Route path="/about" component={About} />
    </Routes>
  </div>;
};

export default App;