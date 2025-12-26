import { useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { BlogHeader } from '../../components/blog/BlogHeader';
import { BlogGrid } from '../../components/blog/BlogGrid';

export default function V3Blog() {
    const [activePage, setPage] = useState('blog');

    return (
        <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 bg-white">
            {/* Navigation from v1 */}
            <Navigation activePage={activePage} setPage={setPage} />

            <main>
                {/* Blog Header from v2 */}
                <BlogHeader />

                {/* Blog Grid from v2 */}
                <BlogGrid setPage={setPage} />
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
