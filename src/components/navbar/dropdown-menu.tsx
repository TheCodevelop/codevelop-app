"use client";
import styles from "./navbar.module.scss";
import ServiceCard from "./service-card";

const DropdownMenu = () => {
  return (
    <div
      className={`${styles.dropdown_content} section`}
      style={{
        color: "black",
      }}
    >
      <p className="text-3xl font-semibold pt-4 pb-8">Our Services</p>
      <div className="flex gap-12">
        <ServiceCard
          name="Website Development"
          description="Give us a design that we can bring to life, or let us take care of crafting a beautiful design tailored to your speciifc needs"
          link="/services/web-dev"
          style={{ flex: 1 }}
        />
        <ServiceCard
          name="App Development"
          description="We transform your vision into user-friendly, high-performance apps that run on any device. Ideal for startups or established businesses."
          link="/services/mobile-app"
          style={{ flex: 1 }}
        />
        <ServiceCard
          name="Custom Software"
          description="Let us transform your ideas into reality. Tailored to meet your business needs, we deliver innovative, efficient applications designed for growth. "
          link="/services/ea"
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
};

export default DropdownMenu;
