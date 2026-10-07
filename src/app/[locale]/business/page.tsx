import { BusinessHero } from "@/components/sections/business/BusinessHero";
import { Services } from "@/components/sections/business/Services";
import { Workflow } from "@/components/sections/business/Workflow";
import { BusinessCaseStudies } from "@/components/sections/business/BusinessCaseStudies";
import { FreeAudit } from "@/components/sections/business/FreeAudit";

export default function BusinessPage() {
  return (
    <div className="flex flex-col">
      <BusinessHero />
      <div id="services">
        <Services />
      </div>
      <div id="workflow">
        <Workflow />
      </div>
      <div id="cases">
        <BusinessCaseStudies />
      </div>
      <FreeAudit />
    </div>
  );
}
