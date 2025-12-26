import { BlogHeader } from '../../components/blog/BlogHeader';
import { BlogGrid } from '../../components/blog/BlogGrid';

export default function V3Blog() {
    return (
        <div className="bg-white">
            {/* Blog Header from v2 */}
            <BlogHeader />

            {/* Blog Grid from v2 */}
            <BlogGrid />
        </div>
    );
}
