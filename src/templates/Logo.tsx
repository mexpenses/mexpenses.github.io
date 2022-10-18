import { memo } from 'react';
import { AppConfig } from '../utils/AppConfig';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Logo: Function = memo((): JSX.Element => {
    const router = useRouter();
    return (
        <span className={`w-full sm:w-1/2 p-6`}>
            <Image src={`${router.basePath}${'/assets/images/logo.svg'}`} width={160} height={42} alt={AppConfig.site_name}/>
        </span>
    );
});

export { Logo };
