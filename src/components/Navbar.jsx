import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [services, setServices] = useState([
    { name: "Orthopedics", path: "/department/orthopedics" },
    { name: "Dermatology", path: "/department/dermatology" },
    { name: "Pediatrics", path: "/department/pediatrics" },
    { name: "Gynaecology", path: "/department/gynaecology" },
    { name: "Neurology", path: "/department/neurology" },
    { name: "Nephrology", path: "/department/nephrology" },
    { name: "General Surgery", path: "/department/general-surgery" },
    { name: "Gastroenterology", path: "/department/gastroenterology" },
    { name: "Plastic Surgery", path: "/department/plastic-surgery" },
    { name: "Endocrinology", path: "/department/endocrinology" },
    { name: "Oncology", path: "/department/oncology" },
    { name: "Vascular Surgery", path: "/department/vascular-surgery" },
    { name: "ENT", path: "/department/ent" },
    { name: "Urology", path: "/department/urology" },
    { name: "Physiotherapy", path: "" }
  ]);
  const [loading, setLoading] = useState(true);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch departments dynamically
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true);
        const API_BASE_URL = window.location.hostname === 'localhost'
          ? 'http://localhost:4000'
          : 'https://ramakrishna-backend.onrender.com';

        const response = await fetch(`${API_BASE_URL}/api/departments`);
        const data = await response.json();
        if (response.ok) {
          const mappedServices = data.map(dept => ({
            name: dept.name,
            path: `/department/${dept.slug}`
          }));
          // Add Physiotherapy if it's missing or keep it as a special case
          if (!mappedServices.find(s => s.name === "Physiotherapy")) {
            mappedServices.push({ name: "Physiotherapy", path: "" });
          }
          setServices(mappedServices);
        }
      } catch (error) {
        console.error('Error fetching departments for navbar:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  const handleScroll = (e, path) => {
    if (path && path.startsWith('#') && path.length > 1) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        const offset = 100;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function animation(currentTime) {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          window.scrollTo(0, startPosition + distance * ease);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        requestAnimationFrame(animation);
      }
    }
  };

  return (
    <nav className="fixed top-2 sm:top-5 md:top-7 left-0 right-0 w-full flex justify-center px-4 sm:px-6 lg:px-8 z-50 font-sohne font-light">
      <div className="flex items-center w-full max-w-[1800px]">
        <a href="/" className="h-[2.5rem] w-[2.5rem] sm:h-[3.75rem] sm:w-[3.75rem] bg-white flex items-center justify-center rounded-lg shadow-[0px_7px_15.6px_-6px_#00000040] flex-shrink-0 mr-2 sm:mr-3 cursor-pointer hover:shadow-lg transition-shadow">
          <img src={logo} alt="Logo" className="h-[2.25rem] w-[2.25rem] sm:h-[3.25rem] sm:w-[3.25rem] object-contain" />
        </a>

        <div className="hidden lg:flex flex-1 items-center justify-between bg-[#FCA61B]/60 rounded-lg pl-8 pr-2 h-[60px] shadow-[0px_7px_15.6px_-6px_#00000040]">
          <div className="flex-1 flex justify-center gap-12">
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href="" className="relative inline-block text-center cursor-pointer">
                <span className="invisible font-medium text-[18px] leading-none tracking-normal font-sohne block h-0">Our Departments</span>
                <span className="text-white hover:font-medium text-[18px] leading-none tracking-normal font-light font-sohne transition-all flex items-center gap-1">Our Departments</span>
              </a>

              <div className={`absolute top-full left-1/2 -translate-x-[40%] mt-4 w-[700px] transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="relative bg-[#FCA61B] rounded-xl p-3.5 border border-white/20 overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-3 gap-x-3 gap-y-0.5">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.path}
                        onClick={(e) => {
                          handleScroll(e, service.path);
                          setIsServicesOpen(false);
                        }}
                        className="group flex items-center px-4 py-1.5 text-white/90 font-sohne font-normal text-[14px] leading-tight tracking-normal cursor-pointer hover:bg-white/10 hover:text-white rounded-lg transition-all"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {[
              { name: "Doctors", path: "/doctors" },
              { name: "About Us", path: "/about" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className="relative inline-block text-center cursor-pointer"
              >
                <span className="invisible font-medium text-[18px] leading-none tracking-normal font-sohne block h-0">{item.name}</span>
                <span className="text-white hover:font-medium text-[18px] leading-none tracking-normal font-light font-sohne transition-all">{item.name}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#FCA61B] h-[40px] w-[40px] rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-[#4ea8a5] border border-white/30 shadow-md">
              <Phone size={20} className="text-white fill-white" />
            </div>
            <div className="bg-[#FCA61B] h-[40px] px-5 rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-[#4ea8a5] border border-white/30 shadow-md">
              <span className="text-white font-sohne font-light text-[18px] leading-none tracking-normal">+91 - 9606970542</span>
            </div>
          </div>
        </div>

        <div className="lg:hidden ml-auto flex items-center gap-1.5 sm:gap-2">
          <a href="tel:+919606970542" className="bg-[#0FB1AB] px-2 py-1 rounded-md text-white border border-white/30 active:scale-95 transition-all flex items-center">
            <span className="text-[clamp(10px,3vw,11px)] sm:text-[13px] font-bold tracking-tight whitespace-nowrap">96069 70542</span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-[#0FB1AB] w-[40px] h-[30px] sm:w-[44px] sm:h-[40px] flex items-center justify-center rounded-lg shadow-[0px_7px_15.6px_-6px_#00000040] text-white border border-white/30 hover:bg-[#016591]/90 transition-all"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#2C747C80]" onClick={closeMobileMenu}>
          <div className="absolute top-20 sm:top-24 left-4 right-4 max-h-[calc(100dvh-6.5rem)] overflow-hidden bg-[#19628D] rounded-2xl shadow-2xl p-5 sm:p-6 border border-white/20 font-sohne animate-fade-in-down" onClick={(e) => e.stopPropagation()}>
            <ul className="flex max-h-[calc(100dvh-11rem)] flex-col gap-1 overflow-y-auto text-center pr-1">
              <li>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-center gap-2 text-[#FFFFFF] py-2 px-2 hover:font-bold rounded-lg transition-all duration-200 font-light text-[17px] leading-none tracking-normal"
                >
                  Our Departments
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-[#19628DE0] rounded-xl py-1.5 px-2 shadow-lg border border-white/20 max-h-60 overflow-y-auto scrollbar-hide">
                    {services.map((service, index) => (
                      <React.Fragment key={index}>
                        <a
                          href={service.path}
                          onClick={(e) => { handleScroll(e, service.path); closeMobileMenu(); }}
                          className="block py-2 px-3 text-white hover:bg-white/15 rounded-lg font-sohne font-normal text-[13px] leading-[16px] tracking-normal transition-all duration-200 cursor-pointer"
                        >
                          {service.name}
                        </a>
                        {index < services.length - 1 && <div className="mx-2 my-0.5 border-t border-white/10"></div>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </li>
              {[
                { name: "Doctors", path: "/doctors" },
                { name: "About Us", path: "/about" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} onClick={(e) => { handleScroll(e, item.path); closeMobileMenu(); }} className="block text-[#FFFFFF] py-2 px-2 hover:font-bold rounded-lg transition-all duration-200 font-light text-[17px] leading-none tracking-normal cursor-pointer">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;