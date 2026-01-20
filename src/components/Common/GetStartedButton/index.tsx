import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {

  const STORE_URL = {
    "ios": "https://apps.apple.com/br/app/mexpenses/id6757622280",
    "android": "https://play.google.com/store/apps/details?id=com.appmexpenses",
    "desktop": "https://app.mexpenses.com.br/#/auth/register/basic"
  }

  function redirectCreateAccount () {
      if (typeof window !== 'undefined') {
          const userAgent = navigator.userAgent;
          if (/iPad|iPhone|iPod/.test(userAgent)) {
              return STORE_URL.ios;
          } else if (/Android/.test(userAgent)) {
              return STORE_URL.android;
          } else {
              return STORE_URL.desktop;
          }
      }
      return "https://app.mexpenses.com.br/#/auth/register/basic";
  }

  const redirectHref = redirectCreateAccount();
  return (
    <LinkTo
      target='_blank'
      style={{
        padding: padding,
      }}
      href={redirectHref}
    >
      Começar agora
    </LinkTo>
  );
};

export default GetStartedButton;
