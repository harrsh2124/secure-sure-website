import { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (newIndex: number) => {
        setOpenIndex((prev) => {
            return prev === newIndex ? 0 : newIndex;
        });
    };

    return (
        <div className="bg-[#F2FFF9] text-[#309C68] px-[50px] xl:px-[150px] py-[60px] flex flex-col items-center">
            <p>FAQs</p>

            <h2 className="text-[30px] font-[700] mt-[1rem] mb-[2rem]">
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
        title: 'Title',
        description:
            'The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.” “The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their.'
    },
    {
        id: 2,
        title: 'Title',
        description:
            'The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.” “The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their.'
    },
    {
        id: 3,
        title: 'Title',
        description:
            'The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.” “The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their.'
    },
    {
        id: 4,
        title: 'Title',
        description:
            'The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.” “The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their.'
    }
];
