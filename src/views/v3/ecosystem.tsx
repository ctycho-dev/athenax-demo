import { useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { EcosystemHero } from '../../components/ecosystem/EcosystemHero';
import { EcosystemBenefits } from '../../components/ecosystem/EcosystemBenefits';
import { AthenaXSolution } from '../../components/ecosystem/AthenaXSolution';
import { WhatEcosystemGets } from '../../components/ecosystem/WhatEcosystemGets';
import { EcosystemPipeline } from '../../components/ecosystem/EcosystemPipeline';

export default function V3Ecosystem() {
    const [activePage, setPage] = useState('ecosystems');

    return (
        <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
            {/* Navigation from v1 */}
            <Navigation activePage={activePage} setPage={setPage} />

            <main>
                {/* Ecosystem Hero from v2 */}
                <EcosystemHero />

                {/* Ecosystem Benefits from v1 */}
                <EcosystemBenefits />

                {/* AthenaX Solution from v2 */}
                <AthenaXSolution />

                {/* What Ecosystem Gets from v2 */}
                <WhatEcosystemGets />

                {/* Ecosystem Pipeline from v1 */}
                <EcosystemPipeline />
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
