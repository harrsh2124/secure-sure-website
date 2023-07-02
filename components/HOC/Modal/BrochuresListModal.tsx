import { useContext } from 'react';
import { InitialValuesType, ModelContext } from '@/context/modal.context';

const BrochuresListModal = () => {
    const { brochures } = useContext(ModelContext) as InitialValuesType;

    return brochures ? (
        <div className="flex w-[90vw] md:w-[700px] items-center">
            <div className="w-full pb-4">
                <h3 className="text-[#546FFF] font-medium text-xl pb-8">
                    {brochures.title}
                </h3>

                <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto">
                    {brochures.brochures.map((brochure) => {
                        return (
                            <div
                                key={brochure.id}
                                className="flex justify-between items-center bg-[#EAF2FF] px-4 py-3 rounded-full gap-5"
                            >
                                <p className="text-[#546FFF] overflow-hidden whitespace-nowrap text-ellipsis">
                                    {brochure.title}
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href={brochure.file}
                                        target="_blank"
                                        className="bg-[#546FFF] text-white text-sm px-10 py-2 rounded-full cursor-pointer"
                                    >
                                        View
                                    </a>

                                    <a
                                        href={brochure.file}
                                        download={`${brochure.title
                                            .slice(0, 10)
                                            .trim()}.pdf`}
                                        className="bg-[#309C68] text-white text-sm px-[22px] py-2 rounded-full cursor-pointer"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    ) : null;
};

export default BrochuresListModal;
