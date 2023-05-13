const env = {
    contactDetails: {
        email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string,
        contactNumber: process.env.NEXT_PUBLIC_CONTACT_NUMBER as string
    },
    api: {
        googleMap: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string
    }
};

export default env;
