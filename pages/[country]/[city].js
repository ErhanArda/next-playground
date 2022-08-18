import { useRouter } from 'next/router';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';
const CityItem = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { country, city } = router.query;

  return (
    <>
      <LanguageSwitcher lang="tr">tr</LanguageSwitcher> |
      <LanguageSwitcher lang="en">en</LanguageSwitcher>
      <h2>
        {city} {t('test')} {country}
      </h2>
    </>
  );
};

export default CityItem;
