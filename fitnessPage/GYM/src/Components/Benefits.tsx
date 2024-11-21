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
import ActionButton from "./ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
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

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
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
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/*  grpahics and desc */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-graphic"
          />
          {/* DESC */}
          <div>
            {/* title */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:abosolute before:-top-20 before:-left-20 before:content-abstractwaves ">
                <div>
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT </span>
                  </Htext>
                </div>
              </div>
            </motion.div>
            {/* desc */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Fitness and health are two sides of the same coin, intertwined
                and essential for a fulfilling life. Physical fitness, achieved
                through regular exercise and a balanced diet, strengthens our
                bodies, improves cardiovascular health, and boosts our immune
                system.
              </p>
              <p className="mb-5">
                A healthy lifestyle encompasses more than just physical
                activity. It involves nourishing our bodies with wholesome
                foods, getting adequate sleep, and managing stress effectively.
                Prioritizing these aspects of health creates a strong foundation
                for overall well-being.
              </p>
            </motion.div>
            {/* Btn */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  JOIN NOW
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
