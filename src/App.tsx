import BackgroundCarousel from "./components/BackgroundCarousel";
import Header from "./components/Header";
import CollectionsSection from "./components/CollectionsSection";
import Footer from "./components/Footer";
import NewDropSection from "./components/NewDropSection";

export default function App() {
    return (
        <>
            <BackgroundCarousel>
                {/* min-h-screen + justify-between reparte el alto entre Header, main y Footer */}
                <div className="flex min-h-screen flex-col justify-between text-white">
                    <Header />
                    {/* flex-1 centra CollectionsSection en el espacio sobrante */}
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
