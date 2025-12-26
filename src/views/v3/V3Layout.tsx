import { Outlet } from 'react-router-dom';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export default function V3Layout() {
    return (
        <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
            <Navigation/>

            <main>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    );
}
