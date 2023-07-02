import ContactUsForm from '@/components/common/ContactUsForm';
import Image from 'next/image';
import ArrowRight from '../../../../public/assets/AboutUs/arrowRight.svg';
import Link from 'next/link';
import { useContext } from 'react';
import { InitialValuesType, ModelContext } from '@/context/modal.context';

const NewPolicyModal = () => {
    const { externalLink } = useContext(ModelContext) as InitialValuesType;

    return (
        <div className="flex flex-col-reverse md:flex-row max-w-4xl items-center">
            <div
                className={`px-0 py-6 sm:p-6 ${
                    externalLink
                        ? 'md:border-r md:border-[#546FFF] w-full md:w-[55%] md:overflow-auto md:max-h-[70vh]'
                        : 'w-full sm:w-[430px]'
                }`}
            >
                <h3 className="text-[#546FFF] text-xl font-medium mb-4">
                    New policy form
                </h3>

                <ContactUsForm />
            </div>

            {externalLink ? (
                <div className="p-6 w-full md:w-[45%] flex flex-col items-center gap-4">
                    <h3 className="text-[#546FFF] text-xl font-medium">
                        Self apply
                    </h3>

                    <p className="text-center">
                        You will redirect to our policy partner that your can
                        see their plan in details and you will have to fill all
                        the details that are asking for.
                    </p>

                    <Link
                        href="https://www.google.com/"
                        target="_blank"
                        type="submit"
                        className="flex items-center gap-5 py-3 px-8 rounded-full bg-[#546FFF] text-white cursor-pointer"
                    >
                        <p>Self apply</p>

                        <div className="w-[25px] h-[20px] relative -rotate-45">
                            <Image src={ArrowRight} alt="Submit button" fill />
                        </div>
                    </Link>
                </div>
            ) : null}
        </div>
    );
};

export default NewPolicyModal;
