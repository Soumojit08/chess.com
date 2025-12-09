import footer from "../assets/chess footer.jpg";
import { Button } from "@/components/ui/button";

const ContactSec = () => {
  const handleClick = () => {
    console.log("Contact clicked");
  };
  return (
    <section className="w-full pt-0 pb-24 px-8 md:px-24 bg-white text-black border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-mono tracking-wider mb-6 text-black">
            GET IN TOUCH
          </h2>
          <p className="mb-6 text-base text-charcoal max-w-xl">
            If you have any questions or would like to get in touch, please
            don't hesitate to reach out. We're here to help!
          </p>
          <Button
            className="bg-transparent border border-black text-black hover:bg-black cursor-pointer hover:text-white transition-all duration-300 uppercase tracking-[0.15em] px-10 py-6 text-sm md:text-base rounded-none backdrop-blur-[2px]"
            onClick={handleClick}
          >
            Contact
          </Button>
        </div>
        <div className="w-2/5 hidden md:block lg:block">
          <img
            src={footer}
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
