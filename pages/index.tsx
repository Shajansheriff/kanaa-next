import type {  NextPage } from 'next';
import { InstagramPost } from '../sections/instagram-post';
import { WhyChooseKanaa } from '../sections/why-choose-kanaa';
import { WhyChooseUs } from '../sections/why-choose-us';
import { Hero } from '../sections/hero';
import { LandingServices } from '../sections/landing-services';
import { OurDoctors } from '../sections/our-doctors';
import { OnlineConsultation } from '../sections/online-consultation';
import { SuccessStories } from '../sections/success-stories';


const Home: NextPage<{ navbar: any }> = ({ navbar }) => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <WhyChooseKanaa />
      <InstagramPost />
      <LandingServices />
      <OnlineConsultation />
      <OurDoctors isMini={true} />
      <SuccessStories />
    </>
  );
};

export default Home;
