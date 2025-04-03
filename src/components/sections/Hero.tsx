import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import HeroImage from "../../assets/hero.png";
import { IoMdMail } from "react-icons/io";
import { Button } from "../shared/Button";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-ful lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            {" "}
            Transform Your Business with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-700 ml-2">
              AI-Powered Solutions
            </span>
          </h1>
          <Paragraph className="mt-8">
            Harness the power of AI to automate tasks, gain deep insights, and
            drive smarter decisions. Seamlessly integrate with your workflow
            while ensuring real-time analytics and security.
          </Paragraph>
          <div className="mt-10 w-full flex max-w-lg mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <form
                action="#"
                className="py-1 pl-6 w-full pr-1 flex  gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary"
              >
                <span className="min-w-max pr-2 border-r border-box-border">
                  <IoMdMail size={24} />
                </span>
                <input
                  type="email"
                  placeholder="kathir@automind.in"
                  className="w-full py-3 outline-none bg-transparent"
                />
                <Button onClick={() => {}} className="min-w-max text-white">
                  <span className="hidden sm:flex relative z-[5]">
                    {" "}
                    Get Started
                  </span>
                  <span className="sm:hidden flex relative z-[5]">
                    <FaArrowRight size={24} />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <img
            src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero Image"
            width={2350}
            height={2359}
            className="lg:absolute lg:h-full lg:w-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
