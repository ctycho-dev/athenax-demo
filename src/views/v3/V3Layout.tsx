import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export default function V3Layout() {
    const location = useLocation();

    // Determine active page from current route
    const getActivePageFromPath = (pathname: string) => {
        if (pathname === '/v3') return 'home';
        if (pathname.includes('/projects')) return 'projects';
        if (pathname.includes('/ecosystem')) return 'ecosystem';
        if (pathname.includes('/about')) return 'about';
        if (pathname.includes('/blog')) return 'blog';
        if (pathname.includes('/article')) return 'article';
        if (pathname.includes('/tv')) return 'tv';
        if (pathname.includes('/discover')) return 'discover';
        return 'home';
    };

    const [activePage, setPage] = useState(getActivePageFromPath(location.pathname));

    return (
        <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
            <Navigation activePage={activePage} setPage={setPage} />

            <main>
                <Outlet context={{ setPage }} />
            </main>

            <Footer setPage={setPage} />
        </div>
    );
}
