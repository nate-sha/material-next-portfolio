import { useRouter } from "next/router";
import Head from "next/head";
export default function Project() {
  const router = useRouter();
  const { projectName } = router.query;

  return (
    <>
      <Head>
        <title>{projectName}</title>
        <meta name="description" content="A project page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{projectName}</h1>
      </main>
    </>
  );
}
