import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  useTranslation,
  LanguageSwitcher,
  useLanguageQuery,
} from 'next-export-i18n';
import { Button } from '@navlungo/nui-elements';

const cityList = [
  {
    country: 'USA',
    // city: 'NewYork',
  },
  {
    country: 'Spain',
    // city: 'Madrid',
  },
  {
    country: 'England',
    // city: 'London',
  },
];

const Index = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const handleRowClick = (country) => {
    router.push({
      pathname: `/${country}`,
      query: query,
    });
  };

  return (
    <>
      <Head>
        <title>Next Playground</title>
      </Head>
      <div>
        <Link href="/about">
          <a>{t('aboutApp')}</a>
        </Link>
      </div>
      <Button label="Selam Deniz!!"></Button>
      <LanguageSwitcher lang="tr">tr</LanguageSwitcher> |
      <LanguageSwitcher lang="en">en</LanguageSwitcher>
      <hr />
      <ul>
        {cityList.map((item, index) => (
          <li key={index}>
            <button onClick={() => handleRowClick(item.country)}>
              <a>{item.country}</a>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index;
