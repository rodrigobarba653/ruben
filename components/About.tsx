import Image from "next/image";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <section id="bio" className="w-full bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left md:order-1 order-2">
          <p className="text-yellow-400 font-semibold text-lg">
            {texts[language].bio.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            {texts[language].bio.title}
          </h2>
          <div className="text-gray-300 mt-4 space-y-4">
            {texts[language].bio.body.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Image from /public/about.jpg */}
        <div className="md:w-1/2 w-full md:max-h-none max-h-[250px] overflow-hidden rounded-3xl flex items-center justify-center">
          <Image
            src="/about.jpg"
            alt="About us"
            width={600}
            height={400}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
