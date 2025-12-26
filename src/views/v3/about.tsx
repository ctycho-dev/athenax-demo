import { useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { AboutHero } from '../../components/about/AboutHero';
import { WhatIsAthenaX } from '../../components/about/WhatIsAthenaX';
import { ConnectWithUs } from '../../components/about/ConnectWithUs';

export default function V3About() {
    const [activePage, setPage] = useState('about');

    return (
        <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
            {/* Navigation from v1 */}
            <Navigation activePage={activePage} setPage={setPage} />

            <main>
                {/* About Hero from v1 */}
                <AboutHero />

                {/* What is AthenaX from v2 */}
                <WhatIsAthenaX />

                {/* Connect With Us from v2 */}
                <ConnectWithUs />
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
