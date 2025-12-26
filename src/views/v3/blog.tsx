import { useOutletContext } from 'react-router-dom';
import { BlogHeader } from '../../components/blog/BlogHeader';
import { BlogGrid } from '../../components/blog/BlogGrid';

export default function V3Blog() {
    const { setPage } = useOutletContext<{ setPage: (page: string) => void }>();

    return (
        <div className="bg-white">
            {/* Blog Header from v2 */}
            <BlogHeader />

            {/* Blog Grid from v2 */}
            <BlogGrid setPage={setPage} />
        </div>
    );
}
