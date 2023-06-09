import Image from 'next/image';
import { useState } from 'react';
import ArrowLeft from '../../../public/assets/Testimonials/arrowLeft.svg';
import ArrowRight from '../../../public/assets/Testimonials/arrowRight.svg';

const Testimonials = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(1);

    const handlePrevIndex = () => {
        setTestimonialIndex((prev) => {
            return prev !== 1 ? --prev : testimonials.length;
        });
    };

    const handleNextIndex = () => {
        setTestimonialIndex((prev) => {
            return prev !== testimonials.length ? ++prev : 1;
        });
    };

    return (
        <div className="text-[#546FFF] px-[50px] xl:px-[150px] py-[60px] flex flex-col items-center">
            <p>Testimonials</p>

            <h2 className="text-[30px] font-[700] mt-[1.5rem] mb-[0.5rem]">
                What lovely people talk about us
            </h2>

            <div className="flex items-center gap-8">
                <div className="relative">
                    <div
                        className="bg-white cursor-pointer flex w-[3rem] h-[3rem] p-3 rounded-full"
                        onClick={handlePrevIndex}
                    >
                        <Image
                            src={ArrowLeft}
                            alt="Left Arrow"
                            className="m-auto"
                        />
                    </div>
                </div>

                <div className="flex-1 bg-[#546FFF] text-white rounded-2xl p-8">
                    {testimonials.map((testimonial) => {
                        return (
                            <div
                                key={testimonial.id}
                                className={`${
                                    testimonial.id !== testimonialIndex
                                        ? 'hidden'
                                        : 'block'
                                }`}
                            >
                                <p>
                                    {testimonial.id} {testimonial.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="relative">
                    <div
                        className="bg-white cursor-pointer flex w-[3rem] h-[3rem] p-3 rounded-full"
                        onClick={handleNextIndex}
                    >
                        <Image src={ArrowRight} alt="Right Arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

const testimonials = [
    {
        id: 1,
        description:
            'Fiest testimonial Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a'
    },
    {
        id: 2,
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a'
    },
    {
        id: 3,
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a'
    },
    {
        id: 4,
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a'
    },
    {
        id: 5,
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a'
    }
];
