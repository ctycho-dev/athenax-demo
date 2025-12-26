import { useOutletContext } from 'react-router-dom';
import { HeroSection } from '../../components/HeroSection';
import { QuoteSection } from '../../components/QuoteSection';
import { LogoBar } from '../../components/LogoBar';
import { ValueGrid } from '../../components/ValueGrid';
import { FourLayerModel } from '../../components/FourLayerModel';
import { StructuralSupport } from '../../components/StructuralSupport';
import { RecentVideos } from '../../components/RecentVideos';

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
