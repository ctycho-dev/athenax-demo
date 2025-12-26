import { TVHero } from '../../components/tv/TVHero';
import { FeaturedVideo } from '../../components/tv/FeaturedVideo';
import { AllEpisodes } from '../../components/tv/AllEpisodes';

export default function V3TV() {
    return (
        <div className="bg-[#020617]">
            {/* TV Hero from v2 */}
            <TVHero />

            {/* Featured Video from v2 */}
            <FeaturedVideo />

            {/* All Episodes from v2 */}
            <AllEpisodes />
        </div>
    );
}
