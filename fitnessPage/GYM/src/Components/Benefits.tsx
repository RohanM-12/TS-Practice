import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
  FilmIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Htext from "./Htext";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description:
      " Get fit and feel fabulous with EVOGYM! Our state-of-the-art facilities and expert trainers are here to help you achieve your fitness goals",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Various workout programs",
    description:
      "With flexible membership options, EVGYM makes it easy for everyone to join the fitness journey. Take advantage of our cardio zone, weightlifting area, and yoga studio ",
  },
  {
    icon: <FilmIcon className="h-6 w-6" />,
    title: "Video workout tutorials",
    description:
      "Your health is our priority, and we’re here to support you every step of the way. ",
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <div>
          <Htext> MORE THAN JUST A GYM</Htext>
          <p>
            Get fit and feel fabulous with EVOGYM! Our state-of-the-art
            facilities and expert trainers are here to help you achieve your
            fitness goals. Whether you're looking to build strength, lose
            weight, or simply stay active, EVOGYM offers a wide range of
            equipment and classes tailored to your needs. Enjoy a welcoming
            atmosphere, personalized training programs, and group classes
            designed to keep you motivated.
          </p>
        </div>
        {/* BENEFITS */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
