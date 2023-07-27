import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Logo from "@/assets/Logo.png";
import Logo2 from "@/assets/Logo2.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";

  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage
    ? "bg-gray-20"
    : "bg-gray-30 drop-shadow";
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(() => {
    const hash = window.location.hash;
    const currentPage = hash.slice(1).replace(/ /g, " ") as SelectedPage;
    return currentPage || "home";
  });

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT SIDE */}

          <div className={`${flexBetween} w-full gap-16`}>
            <AnchorLink
              href="#home"
              onClick={() => setSelectedPage(SelectedPage.Home)}
            >
              <div className="flex w-full items-center gap-6">
                <img src={Logo2} alt="logo2" />
                <img src={Logo} alt="logo" />
              </div>
            </AnchorLink>
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* INNER LEFT SIDE  */}
                <div className={`${flexBetween} text-md gap-8`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* INNER RIGHT SIDE  */}
                <div className={`${flexBetween} text-md gap-8`}>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="group rounded-md border-2 px-2 py-2 hover:border-primary-500 hover:text-primary-500"
                onClick={() => setIsMenuToggle(!isMenuToggle)}
              >
                <Bars3Icon className="h-6 w-6 text-white group-hover:text-primary-500" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuToggle && !isAboveMediumScreens && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-gray-30 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className={`${flexBetween} w-full`}>
            {/* INNER LEFT SIDE  */}
            <div className="text-md ml-[33%] flex flex-col gap-10">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
