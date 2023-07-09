import ContactUsForm from '@/components/common/ContactUsForm';

const ContactUsModal = () => {
    return (
        <div className="w-full sm:w-[430px] px-0 py-6 sm:p-6">
            <h3 className="text-[#546FFF] text-xl font-medium">
                Need a human touch?
            </h3>

            <p className="mb-4 font-extralight">
                Please fill in the form so we can get back to you
            </p>

            <ContactUsForm />
        </div>
    );
};

export default ContactUsModal;
