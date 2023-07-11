import partner1 from '../../assets/RCD.png';
import partner2 from '../../assets/Works.png';
import partner3 from '../../assets/Local.png';
import partner4 from '../../assets/Engineering.png';
import partner5 from '../../assets/Sanitation.png';
import partner6 from '../../assets/Tamani.png';

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <div className="partners-left text-center md:w-1/2 md:mr-10">
          <h2 className="text-3xl font-bold mb-4 trusted-head">Our Trusted Partners</h2>
          <p className="text-whites">
            We are proud to collaborate with industry-leading partners who share our vision and commitment to excellence.
          </p>
          <h2 className="text-2xl font-bold mb-4 trusted-sub">Explore Our Collaborations</h2>
          <p className="text-whites">
            We are proud to collaborate with industry-leading partners who share our vision and commitment to excellence in delivering exceptional solutions.
          </p>
        </div>
        <div className="partners-right lg:w-1/2">
          <div className="grid grid-cols-3 gap-3 justify-center">
            <img src={partner1} alt="Partner 1" className="w-24 h-24 object-contain mx-2 mb-4" />
            <img src={partner2} alt="Partner 2" className="w-24 h-24 object-contain mx-2 mb-4" />
            <img src={partner3} alt="Partner 3" className="w-24 h-24 object-contain mx-2 mb-4" />
            <img src={partner4} alt="Partner 4" className="w-24 h-24 object-contain mx-2 mb-4" />
            <img src={partner5} alt="Partner 5" className="w-24 h-24 object-contain mx-2 mb-4" />
            <img src={partner6} alt="Partner 6" className="w-24 h-24 object-contain mx-2 mb-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
