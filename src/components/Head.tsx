import NextHead from 'next/head';

export function Head() {
  return (
    <NextHead>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0, shrink-to-fit=no' />

      <meta charSet='UTF-8' />

      <title>worldtrip</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
