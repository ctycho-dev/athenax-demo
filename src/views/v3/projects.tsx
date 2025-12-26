import { useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { ProjectsHero } from '../../components/projects/ProjectsHero';
import { WhatYouGet } from '../../components/projects/WhatYouGet';
import { WeWorkWithBuilders } from '../../components/projects/WeWorkWithBuilders';
import { GetIncubated } from '../../components/projects/GetIncubated';
import { ApplicationForm } from '../../components/projects/ApplicationForm';
import { FAQs } from '../../components/projects/FAQs';

export default function V3Projects() {
    const [activePage, setPage] = useState('projects');

    return (
        <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
            {/* Navigation from v1 */}
            <Navigation activePage={activePage} setPage={setPage} />

            <main>
                {/* Projects Hero from v2 */}
                <ProjectsHero />

                {/* What You Get from v2 */}
                <WhatYouGet />

                {/* We Work With All Builders from v2 */}
                <WeWorkWithBuilders />

                {/* Get Incubated from v1 */}
                <GetIncubated />

                {/* Application Form from v2 */}
                <ApplicationForm />

                {/* FAQs from v2 */}
                <FAQs />
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
