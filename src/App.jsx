import BackgroundCarousel from "./components/BackgroundCarousel";
import Header from "./components/Header";
import CollectionsSection from "./components/CollectionsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <BackgroundCarousel>
      <div className="flex flex-col h-full text-white">
        <Header />
        <CollectionsSection />
        <Footer />
      </div>
    </BackgroundCarousel>
  );
}

export default App;