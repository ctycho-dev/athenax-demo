import { EcosystemHero } from '../../components/ecosystem/EcosystemHero';
import { EcosystemBenefits } from '../../components/ecosystem/EcosystemBenefits';
import { AthenaXSolution } from '../../components/ecosystem/AthenaXSolution';
import { WhatEcosystemGets } from '../../components/ecosystem/WhatEcosystemGets';
import { EcosystemPipeline } from '../../components/ecosystem/EcosystemPipeline';

export default function V3Ecosystem() {
    return (
        <>
            {/* Ecosystem Hero from v2 */}
            <EcosystemHero />

            {/* Ecosystem Benefits from v1 */}
            <EcosystemBenefits />

            {/* AthenaX Solution from v2 */}
            <AthenaXSolution />

            {/* What Ecosystem Gets from v2 */}
            <WhatEcosystemGets />

            {/* Ecosystem Pipeline from v1 */}
            <EcosystemPipeline />
        </>
    );
}
