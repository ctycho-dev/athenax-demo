import { useOutletContext } from 'react-router-dom';
import { HeroSection } from '../../components/Home/HeroSection';
import { QuoteSection } from '../../components/Home/QuoteSection';
import { LogoBar } from '../../components/Home/LogoBar';
import { ValueGrid } from '../../components/Home/ValueGrid';
import { FourLayerModel } from '../../components/Home/FourLayerModel';
import { StructuralSupport } from '../../components/Home/StructuralSupport';
import { RecentVideos } from '../../components/Home/RecentVideos';

export default function V3() {
    const { setPage } = useOutletContext<{ setPage: (page: string) => void }>();

    return (
        <>
            {/* Hero Section from v2 */}
            <HeroSection setPage={setPage} />

            {/* Quote Section from v2 */}
            <QuoteSection />

            {/* Logo Bar from v2 */}
            <LogoBar />

            {/* Value Grid from v1 */}
            <ValueGrid />

            {/* Four-layer Model from v2 */}
            <FourLayerModel />

            {/* Structural Support from v1 */}
            <StructuralSupport />

            {/* Recent Videos from v2 */}
            <RecentVideos setPage={setPage} />
        </>
    );
}
