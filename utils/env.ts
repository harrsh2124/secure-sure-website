const env = {
    contactDetails: {
        email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string,
        htmlEmail: process.env.NEXT_PUBLIC_HTML_EMAIL_ADDRESS as string,
        contactNumber: process.env.NEXT_PUBLIC_CONTACT_NUMBER as string,
        htmlContactNumber: process.env.NEXT_PUBLIC_HTML_CONTACT_NUMBER as string
    },
    api: {
        googleMap: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string
    }
};

export default env;
