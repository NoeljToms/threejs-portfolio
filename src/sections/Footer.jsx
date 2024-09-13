const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div
          className="social-icon hover:cursor-pointer"
          onClick={() => window.open("https://github.com/noeljtoms", "_blank")}
        >
          <img
            src="/assets/social-logos/github.svg"
            alt="github"
            className="w-1/2 h-1/2"
          />
        </div>
        <div
          className="social-icon hover:cursor-pointer"
          onClick={() =>
            window.open("https://linkedin.com/in/noeltoms", "_blank")
          }
        >
          <img
            src="/assets/social-logos/linkedin.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </div>
        {/* <div className="social-icon hover:cursor-pointer">
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </div> */}
      </div>

      <p className="text-white-500">© 2024 Noel Toms. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

