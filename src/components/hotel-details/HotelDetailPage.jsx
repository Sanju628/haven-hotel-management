import React from "react";
import { RoomDetail } from "../../hotel-data/roomDetail";
import RoomTypeCard from "../hotel-details/RoomTypeCard";
import RoomGallery from "./RoomGallery";

export default function HotelDetailPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "64px",
      }}
    >
      {RoomDetail.map((room, index) => (
        <section
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            {room.title}
          </h2>
          <RoomGallery images={room.roomGallery} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {room.roomTypeData.map((type, i) => (
              <RoomTypeCard key={i} data={type} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
