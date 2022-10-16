import { Meta } from '../components/layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { VerticalFeatures } from './VerticalFeatures';

const Base: Function = (): JSX.Element => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
