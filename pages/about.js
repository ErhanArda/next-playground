import Head from 'next/head';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>About Next Playground</title>
      </Head>
      <LanguageSwitcher lang="tr">tr</LanguageSwitcher> |
      <LanguageSwitcher lang="en">en</LanguageSwitcher>
      <div>
        <h2>{t('nextPlace')}</h2>
      </div>
    </>
  );
};

export default About;
