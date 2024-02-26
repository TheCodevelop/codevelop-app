"use client";
import styles from "./stepper.module.scss";
import StepCard from "./step-card";
import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

interface StepperProps {}
const Stepper: React.FC<StepperProps> = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = () => {
    // Get all text blocks
    const textBlocks = document.querySelectorAll(`.${styles.text_block}`);
    // Determine which text block is in the viewport
    textBlocks.forEach((block, index) => {
      const blockTop = block.getBoundingClientRect().top;
      const blockHeight = block.getBoundingClientRect().height;
      const triggerPoint = window.innerHeight / 2; // Middle of the screen

      // Change this line to adjust when the text block becomes active
      // Now it checks if the block is within the middle half of the screen
      if (
        blockTop + blockHeight / 2 < triggerPoint &&
        blockTop + blockHeight / 2 > 0
      ) {
        setActiveIndex(index);
      }
    });
  };

  useEffect(() => {
    const throttleddHandleScroll = throttle(handleScroll, 100); // Adjust the timing as needed
    window.addEventListener("scroll", throttleddHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttleddHandleScroll);
      throttleddHandleScroll.cancel();
    };
  }, []);

  return (
    <div className={styles.stepper}>
      {Steps.map((step, index) => (
        <div
          key={`step-${step.title}`}
          className={`${styles.text_block} ${
            activeIndex === index ? styles.active : ""
          }`}
        >
          <StepCard
            index={index}
            title={step.title}
            description={step.description}
            image={step.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Stepper;

interface Step {
  title: string;
  description: string;
  image: string;
}

export const Steps: Step[] = [
  {
    title: "Discovering Your Vision",
    description:
      "We start with a deep dive into your business objectives, target audience, and digital goals. In this initial consultation, we align our strategies with your vision, ensuring a personalized roadmap that meets your specific needs.",
    image: "/magnifying_glass.svg",
  },
  {
    title: "Crafting Your Blueprint",
    description:
      "Leveraging the insights from our discovery phase, we begin to shape your digital future. Our team collaborates with you to draft detailed plans, design mockups, and strategic frameworks that reflect your unique brand and goals.",
    image: "/blueprint.svg",
  },
  {
    title: "Bringing Ideas to Life",
    description:
      "With a solid plan in place, our developers and designers work hand-in-hand with you to create your digital solutions. From seamless websites to functional apps, we ensure every pixel and line of code aligns with your expectations.",
    image: "/programmer.svg",
  },
  {
    title: "Perfecting Your Product",
    description:
      "Quality is our top priority. We conduct rigorous testing and gather your feedback to refine and optimize every aspect of your project. This iterative process ensures that your digital solution is not only functional but flawless.",
    image: "/code_refinement.svg",
  },
  {
    title: "Launching Your Success",
    description:
      "The moment of truth: unveiling your digital solution to the world. But our journey doesn’t end here. We continue to support and grow your project, ensuring it evolves with your business and stays ahead in the digital landscape.",
    image: "/goal.svg",
  },
];
