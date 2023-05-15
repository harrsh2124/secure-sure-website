import env from '@/utils/env';
import { Fragment, useState } from 'react';

const Map = ({ address }: IProps) => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    return (
        <Fragment>
            <div
                role="status"
                className={`h-full shadow animate-pulse ${
                    isMapLoaded ? 'hidden' : 'block'
                }`}
            >
                <div className="h-full bg-gray-300 rounded"></div>

                <span className={`sr-only ${isMapLoaded ? 'block' : 'hidden'}`}>
                    Loading...
                </span>
            </div>

            <iframe
                width="600"
                height="450"
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${env.api.googleMap}&q=${address}`}
                onLoad={() => setIsMapLoaded(true)}
            ></iframe>
        </Fragment>
    );
};

export default Map;

interface IProps {
    address: string;
}
