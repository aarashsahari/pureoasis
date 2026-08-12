import { Consult } from "@/components/site/consult";
import { Durability } from "@/components/site/durability";
import { FeaturedProject } from "@/components/site/featured-project";
import { Hero } from "@/components/site/hero";
import { Pricing } from "@/components/site/pricing";
import { Process } from "@/components/site/process";
import { ServiceArea } from "@/components/site/service-area";
import { Services } from "@/components/site/services";
import { Testimonials } from "@/components/site/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceArea />
      <Services />
      <Process />
      <FeaturedProject />
      <Durability />
      <Testimonials />
      <Pricing />
      <Consult />
    </>
  );
}
