import BackgroundCarousel from "./components/BackgroundCarousel";
import Header from "./components/Header";
import CollectionsSection from "./components/CollectionsSection";
import Footer from "./components/Footer";
import NewDropSection from "./components/NewDropSection";

export default function App() {
    return (
        <>
            <BackgroundCarousel>
                <div className="flex min-h-screen flex-col justify-between text-white">
                    <Header />
                    <main className="flex flex-1 items-center justify-center px-4">
                        <CollectionsSection />
                    </main>
                    <Footer />
                </div>
            </BackgroundCarousel>
            <NewDropSection />
        </>
    );
}
