const about = "https://ik.imagekit.io/omj3ygfmb/hospital/images/about_Ln3o6h1Uf.png";


const AboutHero = () => {


  return (
    <div className="relative w-full font-sans overflow-hidden">
      {/* Background Image Container */}
      <div className="relative w-full">
        <img
          src={about}
          alt="About Us"
          className="w-full h-[100vh] object-cover "
        />
        {/* Overlay - Darker teal overlay */}
        <div className="absolute inset-0 bg-[#0e4857]/70"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-center p-4 gap-6 sm:gap-8 -translate-y-12 md:translate-y-0">
          <h1 className="text-white font-canela font-normal text-[2rem] sm:text-[2.625rem] md:text-[3.375rem] leading-[1.2] md:leading-[1.1] tracking-normal text-center max-w-[90%] md:max-w-none">
             <span className="font-bold italic">Movement </span>
            that takes life <span className="font-bold italic">forward</span>
          </h1>

         
        </div>

       
      </div>
    </div>
  );
}

export default AboutHero;