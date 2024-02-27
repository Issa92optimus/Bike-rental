import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${car.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Make</span>
                <span>{car.make}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Gears</span>
                <span>{car.gears}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Brakes</span>
                <span>{car.brakes}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
