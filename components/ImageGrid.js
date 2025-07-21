import DirectionAwareHover from "./DirectionAwareHover";

const data = [
  {
    image: "/Gallery1.jpg",
    title: "Louis Vuitton",
    location: "Paris, France",
  },
  {
    image: "/Gallery2.jpg",
    title: "Art Deco Bar",
    location: "Vienna, Austria",
  },
  {
    image: "/Gallery3.jpg",
    title: "Ceiling Lines",
    location: "Berlin, Germany",
  },
  {
    image: "/Gallery4.jpg",
    title: "Ceiling Lines",
    location: "Berlin, Germany",
  },
  {
    image: "/Gallery5.jpg",
    title: "Ceiling Lines",
    location: "Berlin, Germany",
  },
  {
    image: "/Gallery6.jpg",
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
