import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 px-6">
      <p>{texts[language].footer.copyright}</p>
      <p className="mt-2 text-sm max-w-3xl mx-auto">
        {texts[language].footer.disclaimer}
      </p>
    </footer>
  );
};

export default Footer;
