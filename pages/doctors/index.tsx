import { NextPage } from 'next';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { ContactCTA } from '../../sections/contact-cta';
import { OurDoctors } from '../../sections/our-doctors';

const Page: NextPage = () => {
  return (
    <>
      <div className="container pb-4 pt-5 mt-5">
        <h2 className="h1 text-center pt-1 pt-xl-2 mb-4">Our Team</h2>
        <p className="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">
          Our dedicated team of specialists is here to provide personalized and
          compassionate care <br /> to help prevent, manage and treat any
          gynecological conditions.
        </p>
        <OurDoctors />
      </div>
      <ContactCTA />
    </>
  );
};

export default Page;
