import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../src/components/Layout";
import List from "../../src/components/List";
import { en } from "../../src/i18n/en";
import { ptBr } from "../../src/i18n/pt-br";
import { User } from "../../src/types";
import { sampleUserData } from "../../src/utils/sample-data";

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => {
  const { locale } = useRouter();
  const translation = locale === "en" ? en : ptBr;
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>{translation.pages.usersListPage.h1}</h1>
      <p>{translation.pages.usersListPage.p1}</p>
      <p>{translation.pages.usersListPage.p2}</p>
      <List items={items} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
