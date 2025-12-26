import { useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { HeroSection } from '../../components/HeroSection';
import { QuoteSection } from '../../components/QuoteSection';
import { LogoBar } from '../../components/LogoBar';
import { ValueGrid } from '../../components/ValueGrid';
import { FourLayerModel } from '../../components/FourLayerModel';
import { StructuralSupport } from '../../components/StructuralSupport';
import { RecentVideos } from '../../components/RecentVideos';
import { Footer } from '../../components/Footer';

export default function V3() {
    const [activePage, setPage] = useState('home');

    return (
        <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
            {/* Navigation from v1 */}
            <Navigation activePage={activePage} setPage={setPage} />

            <main>
                {/* Hero Section from v2 */}
                <HeroSection setPage={setPage} />

                {/* Quote Section from v2 */}
                <QuoteSection />

                {/* Logo Bar from v2 */}
                <LogoBar />

                {/* Value Grid from v1 */}
                <ValueGrid />

                {/* Four-layer Model from v2 */}
                <FourLayerModel />

                {/* Structural Support from v1 */}
                <StructuralSupport />

                {/* Recent Videos from v2 */}
                <RecentVideos setPage={setPage} />
            </main>

            {/* Footer from v2 */}
            <Footer setPage={setPage} />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
                body {
                    font-family: 'Inter', system-ui, -apple-system, sans-serif;
                    -webkit-font-smoothing: antialiased;
                }
                h1, h2, h3, h4 {
                    letter-spacing: -0.025em;
                }
                .italic {
                    font-style: italic;
                }
            `}</style>
        </div>
    );
}
