import { Navigation } from './sections/Navigation/Navigation';
import { Hero } from './sections/Hero/Hero';
import { Catalog } from './sections/Catalog/Catalog';
import { Join } from './sections/Join/Join';
import { Footer } from './sections/Footer/Footer';

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Catalog />
        <Join />
      </main>
      <Footer />
    </>
  );
}
