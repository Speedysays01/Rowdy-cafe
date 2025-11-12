import { Coffee, Pizza, Sandwich, CupSoda, IceCream, Soup, Cookie, Drumstick, Fish, Salad } from "lucide-react";

const FoodGridSection = () => {
  const icons = [
    Coffee,
    Pizza,
    Sandwich,
    CupSoda,
    IceCream,
    Soup,
    Cookie,
    Drumstick,
    Fish,
    Salad,
  ];

  // Create a larger repeated array to fill the screen
  const repeatedIcons = Array.from({ length: 100 }, (_, i) => icons[i % icons.length]);

  return (
    <section className="relative w-screen h-[150vh] sm:h-[120vh] bg-black overflow-x-clip -z-10">
      <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-14 lg:grid-cols-18 xl:grid-cols-20 gap-4 w-full h-full">
        {repeatedIcons.map((Icon, i) => (
          <div key={i} className="flex items-center justify-center -z-10">
            <Icon
              size={36}
              className="text-gray-500/80 z-0 opacity-90 transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodGridSection;
