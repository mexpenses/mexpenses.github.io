import { memo } from 'react';
import { AppConfig } from '../utils/AppConfig';
import { useRouter } from 'next/router';

const Logo: Function = memo((): JSX.Element => {
    const router = useRouter();
    return (
        <span className={`w-full sm:w-1/2 p-6`}>
            <img
                width={160}
                height={42}
                alt={AppConfig.site_name}
                style={{ margin: '0 auto' }}
                src={`${router.basePath}${'/assets/images/logo.svg'}`}
            />
        </span>
    );
});

export { Logo };
