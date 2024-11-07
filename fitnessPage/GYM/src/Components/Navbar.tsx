import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "./ActionButton";
type props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-center";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-4/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <>
                <div className={`${flexBetween} w-full `}>
                  <div className={`${flexBetween}  gap-8 text-sm`}>
                    <Link
                      page="HOME"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="CONTACT"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="BENEFITS"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="OUR CLASSES"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                </div>
                <div className={`${flexBetween} gap-8 w-full`}>
                  <p>Sign In</p>

                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="rounded-full bg-secondary-500 p-2"
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <>
          <div className="fixed right-0 bottom-0 z-40  h-full w-[300px] bg-primary-100 drop-shadow-xl animate-slide-left">
            {/* Close icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            <div className="ml-[33%] flex flex-col gap-10 ">
              <Link
                page="HOME"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="CONTACT"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="BENEFITS"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="OUR CLASSES"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
