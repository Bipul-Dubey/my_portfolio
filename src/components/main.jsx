import Divider from "./common/divider";
import Footer from "./footer";
import HeroSection from "./herosection";
import IntroductionSection from "./introductionsection";
import MyProject from "./myproject";
import ProfessioneEperience from "./professionexperience";
import TechnicalSkills from "./technicalskills";

export default function Main() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <TechnicalSkills />
      <Divider />
      <ProfessioneEperience />
      <Divider />
      <MyProject />
      <Footer />
    </>
  );
}
