import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />

      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
  );
}
