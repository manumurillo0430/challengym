import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-around bg-primary-500 py-16">
      <div className="mx-auto w-5/6 justify-around gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            At QuickFit Gym, we strive to redefine fitness by providing
            state-of-the-art amenities, world-class trainers, and an unmatched
            community spirit. Your wellness journey starts here. Dive in, dream
            big, and get ready to evolve with us.
          </p>
          <p>© QuickFit Gym 2023. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            123 Maple Drive, Sunnyville, AZ 85001, United States.
          </p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
