import DirectionAwareHover from "./DirectionAwareHover";

const data = [
  {
    image: "/welcome.jpg",
    title: "Louis Vuitton",
    location: "Paris, France",
  },
  {
    image: "/welcome.jpg",
    title: "Art Deco Bar",
    location: "Vienna, Austria",
  },
  {
    image: "/welcome.jpg",
    title: "Ceiling Lines",
    location: "Berlin, Germany",
  },
  {
    image: "/welcome.jpg",
    title: "Ceiling Lines",
    location: "Berlin, Germany",
  },
  {
    image: "/welcome.jpg",
    title: "Ceiling Lines",
    location: "Berlin, Germany",
  },
  {
    image: "/welcome.jpg",
    title: "Ceiling Lines",
    location: "Berlin, Germany",
  },
  // Add more...
];

export default function ImageGrid() {
  return (
    <div className="bg-black p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <DirectionAwareHover
          key={index}
          image={item.image}
          title={item.title}
          location={item.location}
        />
      ))}
    </div>
  );
}
