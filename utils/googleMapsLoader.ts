import { Loader } from '@googlemaps/js-api-loader';
import env from './env';

const loader = new Loader({
    apiKey: env.api.googleMap,
    version: 'weekly',
    libraries: ['places']
});
export default loader;
