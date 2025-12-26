import { DiscoverHeader } from '../../components/discover/DiscoverHeader';
import { ProjectFilters } from '../../components/discover/ProjectFilters';
import { ProjectGrid } from '../../components/discover/ProjectGrid';
import { CaseStudies } from '../../components/discover/CaseStudies';

export default function V3Discover() {
    return (
        <div className="bg-white">
            {/* Discover Header from v2 */}
            <DiscoverHeader />

            {/* Projects Section with Filters and Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <ProjectFilters />
                        <ProjectGrid />
                    </div>
                </div>
            </section>

            {/* Case Studies from v2 */}
            <CaseStudies />
        </div>
    );
}
