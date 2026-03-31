import Image from "next/image";
import { Link } from "react-scroll";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section
      id="home"
      className="relative w-full md:h-[620px] py-20 flex items-center md:items-center text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg-hero.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={80}
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 md:bg-gradient-to-r bg-gradient-to-b from-[rgba(17,24,39,0.8)] to-[rgba(17,24,39,0.6)] md:to-[rgba(17,24,39,0.6)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-40 md:px-24">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 md:w-2/3">
          {texts[language].hero.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 md:w-2/3">
          {texts[language].hero.subtitle}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80} // Adjust for navbar height
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-yellow-300 transition cursor-pointer"
          >
            {texts[language].hero.cta1}
          </Link>
          <Link
            to="composer"
            smooth={true}
            duration={600}
            offset={-80}
            className="border border-yellow-400 text-yellow-400 font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition justify-center md:justify-start cursor-pointer"
          >
            {texts[language].hero.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
