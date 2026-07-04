const image = "https://ik.imagekit.io/omj3ygfmb/hospital/ads/logo_EJRohe77Nh.png?tr=w-100";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-6 lg:px-8 font-sohne">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Card container to match reference footer */}
        <div
          className="border bg-[#F1F1F1] border-teal-500 rounded-xl sm:rounded-2xl px-3 sm:px-5 md:px-8 lg:px-10 py-5 sm:py-6 md:py-8 shadow-sm"
          style={{ backgroundColor: '#D9D9D933' }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-7 sm:gap-8 md:gap-10 lg:gap-16">
            {/* Brand Section */}
            <div className="md:w-1/3 lg:w-1/4 space-y-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                  <img src={image} alt="logo" className='w-14 h-14' />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#006492] tracking-wide">
                    ATREUM
                  </h3>
                  <p className="text-xs font-semibold text-[#006492] uppercase tracking-wide">
                    Speciality Hospital
                  </p>
                </div>
              </div>
              <p className="text-[17px] font-normal text-[#006492] leading-tight mt-10">
                Welcome to Atreum! We're South Bangalore&apos;s first and premier
                multi-specialty facility that offers comprehensive care.
              </p>
            </div>

            {/* Vertical divider to mimic design */}
            <div className="hidden md:block w-px bg-gray-500 self-stretch" />

            {/* Right side columns */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-6">
              {/* Clinical Specialities */}
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  Clinical Specialities
                </h4>
                <ul className>
                  <li>
                    <Link
                      to="/orthopaedics"
                      className="text-sm text-[#000000] "
                    >
                      Orthopaedics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gynaecology"
                      className="text-sm text-[#000000] "
                    >
                      Gynaecology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/paediatrics"
                      className="text-sm text-[#000000] "
                    >
                      Pediatrics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/urology"
                      className="text-sm text-[#000000] "
                    >
                      Urology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/critical-care"
                      className="text-sm text-[#000000] "
                    >
                      Critical Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/plastic-surgery"
                      className="text-sm text-[#000000] "
                    >
                      Plastic Surgery
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Visits */}
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  Visits
                </h4>
                <ul className="">
                  <li>
                    <Link
                      to="/doctors"
                      className="text-sm text-[#000000] "
                    >
                      Our Doctors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-sm text-[#000000] "
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/careers"
                      className="text-sm text-[#000000] "
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tpa-insurance"
                      className="text-sm text-[#000000] "
                    >
                      TPA / Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blogs"
                      className="text-sm text-[#000000] "
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  Legal
                </h4>
                <ul className="">
                  <li>
                    <Link
                      to="/terms"
                      className="text-sm text-[#000000] "
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-sm text-[#000000] "
                    >
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Follow */}
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-3">
                  Follow
                </h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black "
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/atreumspecialityhospital_?igsh=MWZjc3JzaXgwZmQ4cQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black "
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1H8Hc8tpqk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black  "
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;