import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 md:h-full md:pb-0">
      {/* IMAGE  AND MAIN HEADER*/}
      <div>
        {/* MAIN HEADER */}
        <div>
          {/* HEADINGS */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="Home-Page-Text" />
              </div>
            </div>
            <p>
              Tired of monotonous workouts? Welcome to ChallengenGym, your
              destination for challenging, exciting, and rewarding fitness
              journeys.
              <br /> We offer innovative workout regimes, tailored to your
              fitness goals. Our top-notch facility, personalized programs, and
              a supportive community transform fitness into a lifestyle.
              <br /> Join ChallengenGym. Embrace challenges. Witness
              transformations.
              <br /> Sign up today! Begin your journey towards a healthier,
              stronger, more confident YOU.
            </p>
          </div>
          {/* ACTIONS */}
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            <p>Learn More</p>
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
