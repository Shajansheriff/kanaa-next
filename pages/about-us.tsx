import { NextPage } from 'next';

import { VisionAndMission } from '../sections/vision-mission';
import { SocialNetworks } from '../sections/social-networks';
import { Values } from '../sections/values';

import valuesData from '../data/values.json';

const ContentSection = ({heading,desc}:{heading:string,desc:string}) => {
  return <section className="container text-center py-5 my-2 my-md-4 my-lg-5">
    <h2 className="h1 mb-4">{heading}</h2>
    <p className='fs-xl pb-2 mb-5'>{desc}</p>
  </section>
};

const AboutUsPage: NextPage<{ navbar: any }> = ({ navbar }) => {
  return (
    <>
      <VisionAndMission />
      <ContentSection heading='Our Vision' desc={valuesData.vision}/>
      <ContentSection heading='Our Mission' desc={valuesData.mission} />
      <Values items={valuesData.items} />
      <SocialNetworks />
    </>
  );
};

export default AboutUsPage;
