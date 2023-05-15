import env from '@/utils/env';
import loader from '@/utils/googleMapsLoader';
import { Fragment, useEffect, useState } from 'react';

const Map = ({ address }: IProps) => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        loader.load().then(() => {
            const geocoder = new window.google.maps.Geocoder();
            const mapComponent = document.getElementById('map');

            geocoder.geocode({ address }, (results, status) => {
                if (status === 'OK' && results && mapComponent) {
                    const mapOptions: google.maps.MapOptions = {
                        center: results[0].geometry.location,
                        zoom: 16,
                        mapTypeControl: true,
                        clickableIcons: true,
                        rotateControl: true
                    };
                    const newMap = new window.google.maps.Map(
                        mapComponent,
                        mapOptions
                    );
                    new window.google.maps.Marker({
                        position: results[0].geometry.location,
                        map: newMap,
                        optimized: true
                    });
                    setIsMapLoaded(true);
                }
            });
        });
    }, [address]);

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
