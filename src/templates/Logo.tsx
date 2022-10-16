import { AppConfig } from '../utils/AppConfig';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Logo: Function = (): JSX.Element => {
    const router = useRouter();
    return (
        <span className={`w-full sm:w-1/2 p-6`}>
            <Image src={`${router.basePath}${'/assets/images/mexpenses-black.png'}`} width={160} height={42} alt={AppConfig.site_name}/>
        </span>
    );
}

export { Logo };
