import { useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { TVHero } from '../../components/tv/TVHero';
import { FeaturedVideo } from '../../components/tv/FeaturedVideo';
import { AllEpisodes } from '../../components/tv/AllEpisodes';

export default function V3TV() {
    const [activePage, setPage] = useState('tv');

    return (
        <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 bg-[#020617]">
            {/* Navigation from v1 */}
            <Navigation activePage={activePage} setPage={setPage} />

            <main>
                {/* TV Hero from v2 */}
                <TVHero />

                {/* Featured Video from v2 */}
                <FeaturedVideo />

                {/* All Episodes from v2 */}
                <AllEpisodes />
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
