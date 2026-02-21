const columns = [
  {
    top: { height: "h-[370px]", bg: "bg-yellow-400", img: "/grid-img5.png" },
    bottom: { height: "h-[160px]", bg: "bg-gray-100", text: "Lonely Planet" },
  },
  {
    top: { height: "h-[250px]", bg: "bg-white", img: "/grid-img.png" },
    bottom: { height: "h-[260px]", bg: "bg-yellow-400", text: "GQ" },
  },
  {
    top: { height: "h-[280px]", bg: "bg-white", img: "/grid-img1.png" },
    bottom: { height: "h-[200px]", bg: "bg-gray-100", text: "TripAdvisor" },
  },
  {
    top: { height: "h-[200px]", bg: "bg-yellow-400", text: "Bloom" },
    bottom: { height: "h-[300px]", bg: "bg-white", img: "/grid-img2.png" },
  },
  {
    top: { height: "h-[240px]", bg: "bg-yellow-400", text: "CNN" },
    bottom: { height: "h-[180px]", bg: "bg-gray-100", text: "Lonely Planet" },
  },
  {
    top: { height: "h-[160px]", bg: "bg-white", text: "GQ" },
    bottom: {
      height: "h-[350px]",
      bg: "bg-yellow-400",
      img: "/grid-img6.jpeg",
    },
  },
  {
    top: { height: "h-[280px]", bg: "bg-white", img: "/grid-img3.png" },
    bottom: { height: "h-[200px]", bg: "bg-gray-100", text: "TripAdvisor" },
  },
  {
    top: { height: "h-[200px]", bg: "bg-yellow-400", text: "Bloom" },
    bottom: { height: "h-[300px]", bg: "bg-white", img: "/grid-img4.png" },
  },
];

function Card({ data }) {
  return (
    <div
      className={`w-[260px] ${data.height} ${data.bg} rounded-2xl shadow-sm flex items-center justify-center text-xl font-bold`}
    >
      {data.img ? (
        <img
          src={data.img}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      ) : (
        data.text
      )}
    </div>
  );
}

export default function MovableGrid() {
  return (
    <div className="bg-[#fff] relative overflow-hidden w-full py-12">
      <div className="w-full">
        <div className="flex gap-8 w-max animate-scroll">
          {[...columns, ...columns].map((col, i) => (
            <div key={i} className="flex flex-col gap-6 shrink-0">
              <Card data={col.top} />
              <Card data={col.bottom} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
