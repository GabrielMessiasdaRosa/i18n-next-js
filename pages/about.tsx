import { useRouter } from "next/router";
import Layout from "../src/components/Layout";
import { en } from "../src/i18n/en";
import { ptBr } from "../src/i18n/pt-br";

const AboutPage = () => {
  const { locale } = useRouter();
  const translation = locale === "en" ? en : ptBr;
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>{translation.pages.aboutPage.h1}</h1>
      <p>{translation.pages.aboutPage.p1}</p>
    </Layout>
  );
};

export default AboutPage;
