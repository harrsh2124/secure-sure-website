const env = {
    contactDetails: {
        email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string,
        contactNumber: process.env.NEXT_PUBLIC_CONTACT_NUMBER as string
    }
};

export default env;
