import { useRouter } from "next/router";
import Layout from "../src/components/Layout";
import { en } from "../src/i18n/en";
import { ptBr } from "../src/i18n/pt-br";

const IndexPage = () => {
  const { locale } = useRouter();
  const translation = locale === "en" ? en : ptBr;
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>{translation.pages.homePage.h1}</h1>
    </Layout>
  );
};

export default IndexPage;
