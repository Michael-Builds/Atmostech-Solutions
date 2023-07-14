import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Items";
import partner1 from '../../assets/RCD.png';
import partner2 from '../../assets/Works.png';
import partner3 from '../../assets/Local.png';
import partner4 from '../../assets/Engineering.png';
import partner5 from '../../assets/Sanitation.png';
import partner6 from '../../assets/Tamani.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Items = () => {
  return (
    <>
      <section className='partners-section'>
        <div className='mx-auto overflow-hidden'>
        <h2 className="text-3xl font-bold mb-4 text-center trusted-head">Our Trusted Partners</h2>
        <p className="text-center mb-8 justify-center trusted-sub">
          We are dedicated to making a lasting impact in our community and beyond.
        </p>

        <div className="Carousel mb-8 mt-6">
          <Carousel
            breakPoints={breakPoints}
            renderPagination={({ pages, activePage, onClick }) => {
              return (
                <div className="carousel-pagination">
                  {pages.map((page) => {
                    const isActivePage = activePage === page;
                    return (
                      <button
                        key={page}
                        onClick={() => onClick(page)}
                        className={`pagination-item ${isActivePage ? 'pagination-item-active' : ''}`}
                      />
                    );
                  })}
                </div>
              );
            }}
          >
            <Item>
              <img
                src={partner1}
                alt="Partner-1"
                className="w-24 h-24 object-contain mx-2 mb-4"
              />
            </Item>
            <Item>
              <img
                src={partner2}
                alt="Partner-1"
                className="w-24 h-24 object-contain mx-2 mb-4"
              />
            </Item>
            <Item>
              <img
                src={partner3}
                alt="Partner-1"
                className="w-24 h-24 object-contain mx-2 mb-4"
              />
            </Item>
            <Item>
              <img
                src={partner4}
                alt="Partner-1"
                className="w-24 h-24 object-contain mx-2 mb-4"
              />
            </Item>
            <Item>
              <img
                src={partner5}
                alt="Partner-1"
                className="w-24 h-24 object-contain mx-2 mb-4"
              />
            </Item>
            <Item>
              <img
                src={partner6}
                alt="Partner-1"
                className="w-24 h-24 object-contain mx-2 mb-4"
              />
            </Item>
          </Carousel>
          </div>
          </div>
      </section>
    </>
  );
}

export default Items;