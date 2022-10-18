import { memo } from 'react';
import { AppConfig } from '../../utils/AppConfig';

const FooterCopyright = memo(() =>
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} <b>{AppConfig.title}</b>
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
