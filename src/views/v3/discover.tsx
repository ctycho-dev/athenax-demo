import { useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { DiscoverHeader } from '../../components/discover/DiscoverHeader';
import { ProjectFilters } from '../../components/discover/ProjectFilters';
import { ProjectGrid } from '../../components/discover/ProjectGrid';
import { CaseStudies } from '../../components/discover/CaseStudies';

export default function V3Discover() {
    const [activePage, setPage] = useState('discover');

    return (
        <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 bg-white">
            {/* Navigation from v1 */}
            <Navigation activePage={activePage} setPage={setPage} />

            <main>
                {/* Discover Header from v2 */}
                <DiscoverHeader />

                {/* Projects Section with Filters and Grid */}
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            <ProjectFilters />
                            <ProjectGrid />
                        </div>
                    </div>
                </section>

                {/* Case Studies from v2 */}
                <CaseStudies />
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
