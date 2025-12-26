import { AboutHero } from '../../components/about/AboutHero';
import { WhatIsAthenaX } from '../../components/about/WhatIsAthenaX';
import { ConnectWithUs } from '../../components/about/ConnectWithUs';

export default function V3About() {
    return (
        <>
            {/* About Hero from v1 */}
            <AboutHero />

            {/* What is AthenaX from v2 */}
            <WhatIsAthenaX />

            {/* Connect With Us from v2 */}
            <ConnectWithUs />
        </>
    );
}
