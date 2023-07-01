import Three from '@/public/assets/Home/3.svg';
// import HDFC from '@/public/assets/Home/CompanyLogo/HDFC.svg';
import ICICI from '@/public/assets/Home/CompanyLogo/ICICI.png';
import LIC from '@/public/assets/Home/CompanyLogo/LIC.png';
// import MaxLife from '@/public/assets/Home/CompanyLogo/MaxLife.jpg';
import Bajaj from '@/public/assets/Home/CompanyLogo/Bajaj.png';
import TataAIG from '@/public/assets/Home/CompanyLogo/TataAIG.png';
import { links } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

const Associated = () => {
    return (
        <div className="my-[120px] px-[1rem] md:px-[50px] xl:px-[150px]">
            <p className="text-[#546FFF] text-center mb-6 text-lg font-[800]">
                Associated with
            </p>

            <div className="w-full bg-[#F0F2FF] py-[20px] px-[40px] rounded-xl lg:rounded-3xl flex justify-between items-center flex-col lg:flex-row gap-6 lg:gap-0">
                {/* <Image
                    src={HDFC}
                    alt="HDFC Insurance"
                    height={30}
                    quality={50}
                /> */}

                <Image
                    src={Bajaj}
                    alt="Bajaj Insurance"
                    // height={30}
                    width={140}
                    quality={50}
                />

                <Image
                    src={TataAIG}
                    alt="Tata AIG Insurance"
                    height={55}
                    quality={50}
                />

                <Image
                    src={ICICI}
                    alt="ICICI Insurance"
                    height={30}
                    quality={50}
                />

                <Image src={LIC} alt="LIC Insurance" height={30} quality={50} />

                {/* <Image
                    src={MaxLife}
                    alt="MaxLife Insurance"
                    height={30}
                    quality={50}
                /> */}

                <Link href={links.alliance}>
                    <div className="flex lg:flex-col gap-1 items-center">
                        <p className="text-[#546FFF]">And many more</p>

                        <Image src={Three} alt="Right icon" width={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Associated;
