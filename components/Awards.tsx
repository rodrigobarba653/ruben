import Image from "next/image";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

const awardsImages = [
  {
    src: "/awards/award-1.jpg",
    alt: "Winner, Local Horror & Thriller Short",
    name: "Winner, Local Horror & Thriller Short",
  },
  {
    src: "/awards/award-2.jpg",
    alt: "Best Documentary Feature — New York International Film Awards",
    name: "Best Documentary Feature — New York International Film Awards",
  },
  {
    src: "/awards/award-3.jpg",
    alt: "Emmy Winner — Best Documentary Longform (2025)",
    name: "Emmy Winner — Best Documentary Longform (2025)",
  },
  {
    src: "/awards/award-4.jpg",
    alt: "Best Mobile Phone Film Feature — Cannes World Film Festival",
    name: "Best Mobile Phone Film Feature — Cannes World Film Festival",
  },
  {
    src: "/awards/award-5.jpg",
    alt: "Emmy Award Nominee (2020)",
    name: "Emmy Award Nominee (2020)",
  },
];

const Awards = () => {
  const { language } = useLanguage();

  return (
    <section
      id="awards"
      className="w-full bg-gray-950 text-white py-12 px-6 border-y border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-yellow-400 font-semibold text-lg">
          {texts[language].awards.subtitle}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          {texts[language].awards.title}
        </h2>

        <div className="mt-8">
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {awardsImages.map((image) => (
                <div key={image.src} className="flex flex-col items-center gap-2">
                  <div className="relative w-full h-40 md:h-56 rounded-2xl flex items-center justify-center bg-gray-900/50">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={250}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm text-center">
                    {image.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
