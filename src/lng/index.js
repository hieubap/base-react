import enLang from "./entries/en-US";
import zhLang from "./entries/zh-Hans-CN";
import arLang from "./entries/ar_SA";
import itLang from "./entries/it_IT";
import esLang from "./entries/es_ES";
import frLang from "./entries/fr_FR";
import { useSelector } from "react-redux";
import { ConfigProvider } from "antd";
import { IntlProvider } from "react-intl";

const AppLocale = {
  en: enLang,
  zh: zhLang,
  ar: arLang,
  it: itLang,
  es: esLang,
  fr: frLang,
};

const LngProvider = ({ children }) => {
  const { locale } = useSelector(({ setting }) => setting);
  const currentLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentLocale.antd}>
      <IntlProvider
        locale={currentLocale.locale}
        messages={currentLocale.messages}
      >
        {children}
      </IntlProvider>
    </ConfigProvider>
  );
};

export default LngProvider;