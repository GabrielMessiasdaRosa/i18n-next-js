import { useRouter } from "next/router";

export type SelectLanguageProps = {};

const SelectLanguage = ({}: SelectLanguageProps) => {
  const { locale, push } = useRouter();
  const changeLanguage = (event) => {
    const locale = event.target.value;
    push("/", "/", { locale });
  };
  return (
    <select onChange={changeLanguage} defaultValue={locale}>
      <option value={"en"}>EN</option>
      <option value={"pt-BR"}>PT-BR</option>
    </select>
  );
};

export default SelectLanguage;
