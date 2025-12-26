import { ProjectsHero } from '../../components/projects/ProjectsHero';
import { WhatYouGet } from '../../components/projects/WhatYouGet';
import { WeWorkWithBuilders } from '../../components/projects/WeWorkWithBuilders';
import { GetIncubated } from '../../components/projects/GetIncubated';
import { ApplicationForm } from '../../components/projects/ApplicationForm';
import { FAQs } from '../../components/projects/FAQs';

export default function V3Projects() {
    return (
        <>
            {/* Projects Hero from v2 */}
            <ProjectsHero />

            {/* What You Get from v2 */}
            <WhatYouGet />

            {/* We Work With All Builders from v2 */}
            <WeWorkWithBuilders />

            {/* Get Incubated from v1 */}
            <GetIncubated />

            {/* Application Form from v2 */}
            <ApplicationForm />

            {/* FAQs from v2 */}
            <FAQs />
        </>
    );
}
