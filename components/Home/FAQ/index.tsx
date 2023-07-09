import { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (newIndex: number) => {
        setOpenIndex((prev) => {
            return prev === newIndex ? 0 : newIndex;
        });
    };

    return (
        <div className="bg-[#F2FFF9] text-[#309C68] px-[1rem] md:px-[50px] xl:px-[150px] py-[60px] flex flex-col items-center">
            <p>FAQs</p>

            <h2 className="text-[25px] md:text-[30px] lg:text-[35px] font-[700] mb-[2rem]">
                Frequently asked questions
            </h2>

            <div className="flex flex-col gap-4 w-full">
                {FAQs.map((faq) => {
                    return (
                        <div
                            key={faq.id}
                            className="bg-white w-full cursor-pointer rounded-lg"
                            onClick={() => handleToggle(faq.id)}
                        >
                            <p className="p-4">{faq.title}</p>

                            <div
                                className={`text-[#3F3F3F] text-sm ${
                                    openIndex === faq.id
                                        ? 'h-full visible p-4 pt-0'
                                        : 'h-0 invisible p-0'
                                }`}
                            >
                                <p>{faq.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;

const FAQs = [
    {
        id: 1,
        title: 'What is Secure Sure?',
        description:
            'It is an insurance agency that assists you in making informed decisions while buying insurance.'
    },
    {
        id: 2,
        title: 'What do we do?',
        description:
            'We have skilled and seasoned insurance advisors who will talk with you and resolve all your queries. After that, they suggest customized insurance solutions to make a purchase. All you need to do is schedule a free consultation call.'
    },
    {
        id: 3,
        title: 'Are your services free?',
        description: 'Yes, it is free.'
    },
    {
        id: 4,
        title: 'Why are you doing it for free?',
        description:
            'We truly believe that financial literacy and information should be made accessible to people without breaking their bank accounts. For that, we will go the extra mile and transform our dream into reality.'
    }
];
