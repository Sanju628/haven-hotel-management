import React from "react";
import ImageCarousel from "../ImageCarousel";

export default function HotelRoomCard({ hotelData }) {
  return (
    <>
      <section className="rooms-grid">
        {hotelData.map((card, index) => (
          <article className="room-card" key={index}>
            <ImageCarousel images={card.cardImageUrl} />

            <div className="room-content">
              <h3 className="room-title">{card.title}</h3>

              <ul className="facilities">
                {card.facilities.map((facility, i) => (
                  <li key={i} className="facility-item">
                    <img
                      src={facility.facilityImg}
                      alt={facility.facilityName}
                    />
                    <span>{facility.facilityName}</span>
                  </li>
                ))}
              </ul>

              <ul className="amenities">
                {card.roomAmenities.map((amenity, i) => (
                  <li key={i}>{amenity}</li>
                ))}
              </ul>
              <section className="flex">
                <a href={`/rooms`} className="book-btn">
                  Book Now
                </a>
              </section>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
