import { IClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<IClassType> = [
  {
    name: "High Intensity Interval Training (HIIT)",
    description:
      "An intense cardio workout that alternates between periods of high-intensity and low-intensity exercise. Perfect for those looking to burn fat and improve cardiovascular health in a short amount of time.",
    image: image3,
  },
  {
    name: "Boxing Fitness",
    description:
      "A high-energy workout based on training methods used by boxers. It combines cardio and strength training, enhancing endurance, agility, speed, and power. Perfect for those who want an intense, full-body workout while learning self-defense techniques.",
    image: image5,
  },
  {
    name: "Cardio Class",
    description:
      "A high-intensity workout that takes place on our salon. Great for those looking to boost cardiovascular health and lower body strength.",
    image: image2,
  },
  {
    name: "Pilates",
    description:
      "A low-impact class that emphasizes postural alignment, core strength, and muscle balance. Excellent for improving flexibility and body awareness.",
    image: image1,
  },
  {
    name: "Yoga",
    description:
      "A gentle yet challenging class that focuses on flexibility, balance, and mindfulness. Suitable for all levels and ideal for reducing stress and improving body strength.",
    image: image4,
  },
  {
    name: "Zumba",
    description:
      "A fun, high-energy class that combines Latin dance moves with cardio exercise. Perfect for those who enjoy dynamic workouts and dancing.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-500 py-40 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-5/6">
            <HText>Our Classes</HText>
            <p className="py-5">
              Our classes are designed to cater to all fitness levels and
              preferences, providing a comprehensive workout experience that is
              both challenging and enjoyable. From high-intensity cardio
              sessions and strength training to yoga and Pilates, we offer a
              diverse range of options to suit everyone's needs. Each class is
              led by experienced and certified trainers who are committed to
              helping you reach your fitness goals. Whether you're a beginner
              looking to start your fitness journey or an athlete aiming to
              elevate your performance, our classes offer the guidance,
              motivation, and variety you need to stay engaged and make
              progress. Enjoy the camaraderie of group workouts, experience the
              thrill of overcoming challenges together, and become part of a
              community committed to fitness and wellness.
            </p>
          </div>
        </motion.div>
        <div className="mt-20 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: IClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
