/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
      </main>
      <Contact />
    </div>
  );
}

