import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { en } from "../i18n/en";
import { ptBr } from "../i18n/pt-br";
import SelectLanguage from "./SelectLanguage";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const { locale } = useRouter();
  const translation = locale === "en" ? en : ptBr;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>{translation.defaultLayoutComponents.header.navOption1}</a>
          </Link>{" "}
          |{" "}
          <Link href="/about">
            <a>{translation.defaultLayoutComponents.header.navOption2}</a>
          </Link>{" "}
          |{" "}
          <Link href="/users">
            <a>{translation.defaultLayoutComponents.header.navOption3}</a>
          </Link>{" "}
          <SelectLanguage />
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>{translation.defaultLayoutComponents.footer.p1}</span>
      </footer>
    </div>
  );
};

export default Layout;
