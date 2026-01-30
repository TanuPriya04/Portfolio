import NavbarMain from './components/navbar/NavbarMain';
import HeroMai from './components/heroSection/HeroMai';
import HeroGradient from './components/heroSection/HeroGradient';
import SubHeroSection from './components/heroSection/SubHeroSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import HelperSection from './components/HelperSection';
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMai />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain/>
      <ContactMeMain/>
      <FooterMain/>
      <HelperSection />
    </main>
  );
  
};

export default App;
