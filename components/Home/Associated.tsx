import Three from '@/public/assets/Home/3.svg';
import HDFC from '@/public/assets/Home/CompanyLogo/HDFC.svg';
import ICICI from '@/public/assets/Home/CompanyLogo/ICICI.png';
import LIC from '@/public/assets/Home/CompanyLogo/LIC.png';
import MaxLife from '@/public/assets/Home/CompanyLogo/MaxLife.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Associated = () => {
    return (
        <div className="my-[120px]">
            <p className="text-[#546FFF] text-center mb-6 text-lg font-[800]">
                Associated with
            </p>

            <div className="w-full bg-[#F0F2FF] py-[20px] px-[40px] rounded-[60px] flex justify-between items-center">
                <Image
                    src={HDFC}
                    alt="HDFC Insurance"
                    height={30}
                    quality={50}
                />

                <Image
                    src={ICICI}
                    alt="ICICI Insurance"
                    height={30}
                    quality={50}
                />

                <Image src={LIC} alt="LIC Insurance" height={30} quality={50} />

                <Image
                    src={MaxLife}
                    alt="MaxLife Insurance"
                    height={30}
                    quality={50}
                />

                <Link href="/services">
                    <div className="flex items-center gap-1">
                        <p className="text-[#546FFF]">See more</p>

                        <Image src={Three} alt="Right icon" width={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Associated;
