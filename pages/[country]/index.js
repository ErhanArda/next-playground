import { useRouter } from 'next/router';
import {
  useTranslation,
  LanguageSwitcher,
  useLanguageQuery,
} from 'next-export-i18n';

const CountryItem = () => {
  const { t } = useTranslation();
  // const router = useRouter();
  const [queryx] = useLanguageQuery();
  const { country } = router.query;
  console.log('query', queryx);
  // console.log('router.query;', router.query);

  const passedQuery = {};
  let query = router.query;
  const keys = Object.keys(query);
  keys.forEach((key, index) => {
    passedQuery[key] = query[key];
  });

  // const changeLanguage = (lang) => {
  //   router.push({
  //     pathname: router.pathname,
  //     query: {
  //       ...passedQuery,
  //       lang,
  //     },
  //   });
  // };

  return (
    <>
      <button onClick={changeLanguage('tr')}>TR</button>
      <button onClick={changeLanguage('en')}>EN</button>
      <LanguageSwitcher lang="tr">tr</LanguageSwitcher> |
      <LanguageSwitcher lang="en">en</LanguageSwitcher>
      <h2>
        {t('test')}-{country} !!
      </h2>
    </>
  );
};

export default CountryItem;
