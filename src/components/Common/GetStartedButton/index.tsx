import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      target='_blank'
      style={{
        padding: padding,
      }}
      href="https://app.mexpenses.com.br/#/auth/register/basic"
    >
      Começar agora
    </LinkTo>
  );
};

export default GetStartedButton;
