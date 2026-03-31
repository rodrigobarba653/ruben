import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";
import { creditEntries, creditsImdbUrl } from "@/constants/credits";

const Credits = () => {
  const { language } = useLanguage();
  const t = texts[language].credits;

  return (
    <section id="credits" className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-500 text-lg font-semibold">{t.subtitle}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          {t.title}
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl">{t.description}</p>
        <a
          href={creditsImdbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-5 rounded-full border border-gray-900 px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
        >
          {t.imdbCta}
        </a>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {creditEntries.map((row) => (
            <li
              key={row.project}
              className="border-b border-gray-200 pb-3 text-sm md:text-base"
            >
              <p className="font-semibold text-gray-900">{row.project}</p>
              <p className="text-gray-600 mt-0.5">{row.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Credits;
