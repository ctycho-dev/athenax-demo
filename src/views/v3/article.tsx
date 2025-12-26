import { ArticleHeader } from '../../components/article/ArticleHeader';
import { ArticleContent } from '../../components/article/ArticleContent';
import { ArticleSidebar } from '../../components/article/ArticleSidebar';
import { ArticleFooter } from '../../components/article/ArticleFooter';

export default function V3Article() {
    return (
        <div className="pt-20 bg-white">
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
        </div>
    );
}
