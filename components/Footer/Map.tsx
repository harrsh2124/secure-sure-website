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
                        map: newMap
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

            <div id="map" className="h-full" />
        </Fragment>
    );
};

export default Map;

interface IProps {
    address: string;
}
