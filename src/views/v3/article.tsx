import { useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { ArticleHeader } from '../../components/article/ArticleHeader';
import { ArticleContent } from '../../components/article/ArticleContent';
import { ArticleSidebar } from '../../components/article/ArticleSidebar';
import { ArticleFooter } from '../../components/article/ArticleFooter';

export default function V3Article() {
    const [activePage, setPage] = useState('blog');

    return (
        <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 bg-white">
            {/* Navigation from v1 */}
            <Navigation activePage={activePage} setPage={setPage} />

            <main className="pt-20 bg-white">
                <section className="py-20 px-6 max-w-5xl mx-auto">
                    {/* Article Header */}
                    <ArticleHeader />

                    {/* Article Content and Sidebar */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <ArticleContent />
                        <ArticleSidebar />
                    </div>

                    {/* Article Footer */}
                    <ArticleFooter />
                </section>
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
