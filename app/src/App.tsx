import Analytics from './components/Analytics';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App bg-black">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  );
}

export default App;
