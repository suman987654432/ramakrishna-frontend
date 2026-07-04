import vector1 from "../../ads image/Vector1.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SurgeryInfo = ({ data }) => {
  if (!data) return null;

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-8 pb-4 lg:pt-14 lg:pb-8 font-sohne overflow-hidden">
      <div className="relative w-full min-h-[500px] lg:min-h-[600px] flex flex-col lg:block bg-transparent lg:bg-[#0FB1AB33] rounded-xl">

        <div className="relative z-20 w-full lg:w-[60%] xl:w-[55%] p-4 md:p-8 lg:px-20 xl:px-24 lg:py-16">
          <div className="flex flex-row lg:block items-start gap-4">
            <div className="w-[55%] md:w-[65%] lg:w-full">
              <h2
                className="text-[16px] md:text-[24px] lg:text-[36px] xl:text-[42px] font-canela text-[#0B5D85] leading-tight tracking-tight mb-3 md:mb-5 lg:mb-8"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <p
                className="text-[13px] md:text-[18px] lg:text-[22px] xl:text-[25px] text-[#0B5D85] font-sohne leading-snug text-justify lg:leading-[1.1] xl:leading-[1] lg:max-w-[95%]"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
            {/* Mobile/Tablet image and info on the right */}
            <div className="flex flex-col lg:hidden w-[40%] md:w-[30%] shrink-0 pt-1 md:pt-4">
              <LazyLoadImage
                src={data.image}
                alt="Surgery illustration"
                effect="blur"
                className="w-full h-auto object-contain"
              />
              <div className="w-full h-[1px] bg-[#0FB1AB] mt-[-2px] mb-2 md:mb-4"></div>
              <p
                className="text-[13px] md:text-[16px] text-[#0B5D85]/90 leading-tight text-left font-medium font-bucher"
                dangerouslySetInnerHTML={{ __html: data.sideText }}
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full lg:flex items-end justify-between px-4 md:px-8 lg:px-24 md:mb-4 lg:mb-8 ">
          {/* Desktop-only: side info */}
          <div className="hidden lg:block lg:w-[35%] relative order-1 lg:order-2">
            <div className="hidden xl:flex absolute left-[60px] top-[-200px] h-[180px] flex-col items-center pointer-events-none">
              <div className="h-full w-[1.5px] bg-[#0B5D85]/40"></div>
              <div className="w-2 h-2 rounded-xl bg-[#0FB1AB]"></div>
            </div>

            <p
              className="text-[15px] mb-8 md:mb-12 lg:text-[22px] xl:text-[25px] text-[#0B5D85]/90 text-justify leading-tight lg:leading-[1.2] font-medium font-bucher"
              dangerouslySetInnerHTML={{ __html: data.sideText }}
            />
          </div>

          {/* Divider for mobile/tablet */}
          <div className="block lg:hidden h-[1px] bg-[#0FB1AB]/30 my-3 md:my-6"></div>

          <div className="w-full lg:w-[50%] mb-5 order-2 lg:order-1">
            <p
              className="text-[16px] md:text-[22px] lg:text-[23px] xl:text-[25px] text-[#0B5D85] font-canela text-justify leading-tight lg:leading-[1.2]"
              dangerouslySetInnerHTML={{ __html: data.bottomText }}
            />
          </div>

          {/* Divider below for mobile/tablet */}
          <div className="block lg:hidden h-[1px] bg-[#0FB1AB]/30"></div>
        </div>

        {/* Border Graphic - Desktop only */}
        <div className="hidden lg:block absolute top-0 left-0 w-full -z-1" style={{ height: '450px' }}>
          <LazyLoadImage src={vector1} alt="decorative border" className="w-full h-full object-fit" style={{ display: 'block' }} />
        </div>

        {/* surgery illustration - Desktop only (absolute positioned) */}
        <div className={`hidden lg:block absolute top-[10px] right-0 lg:right-[4%] xl:right-[8%] w-fit z-[25] pointer-events-none ${data.imageClass || ''}`}>
          <LazyLoadImage
            src={data.image}
            alt="Surgery illustration"
            effect="blur"
            className="w-[240px] lg:w-[320px] xl:w-[380px] h-auto object-contain transform scale-105 xl:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default SurgeryInfo;