"use client";

import React from "react";

import ButtonLink from "@/components/button-link";
import Image from "next/image";
import PositionCard from "./position-card";
import BenefitCard from "./benefit-card";
import styles from "./careers.module.scss";
import { Jobs } from "./job/[jobId]/jobs";
import { variables } from "../variables";

export default function Page() {
  // Step 3: Implement the scroll function

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
      className={styles.smooth}
    >
      <div
        style={{
          position: "relative",
          height: "50vh",
          minHeight: "37.5rem",
          overflowX: "hidden",
          overflowY: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/world_map.svg"
          alt="world map"
          fill
          style={{
            opacity: "30%",
            position: "absolute",
            zIndex: -1,
            right: 0,
            top: 15,
            left: 0,
            minWidth: "62.5rem",
            minHeight: "37.5rem",
          }}
        ></Image>
        <div
          style={{
            fontSize: "4rem",
            textAlign: "center",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          <span>
            From Anywhere <br></br>To Everywhere<br></br> The World is our
            Office
          </span>
          <ButtonLink
            href="#open-positions"
            text="See Open Positions"
            color="white"
          ></ButtonLink>
        </div>
      </div>

      <div style={{ backgroundColor: variables.secondaryColor }}>
        <div
          className="section"
          style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div
            style={{
              fontSize: "4rem",
              marginBottom: "2rem",
              color: variables.primaryColor,
            }}
          >
            Benefits
          </div>
          <div className={styles.benefit_grid}>
            <BenefitCard
              image={
                <Image
                  src="/hand_money.svg"
                  alt="handing money"
                  width={100}
                  height={100}
                ></Image>
              }
              title="Remote Work Stipend"
              description="Maximize your savings and productivity with our remote work benefits. We save a lot of money by working remotely, and that money goes back to you. Receive an upfront bonus to craft your ideal home office, followed by a monthly stipend for ongoing needs. It's not just a benefit—it's our investment in your comfort and success, wherever you are."
            ></BenefitCard>
            <BenefitCard
              image={
                <Image
                  src="/life_balance.svg"
                  alt="handing money"
                  width={100}
                  height={100}
                ></Image>
              }
              title="Live Life"
              description="At Codevelop, we believe in the importance of having Work-Life Balance. By empowering our employees with the freedom to set their schedule, we cultivate a culture of trust, respect, and mutual support. Our goal is to ensure that our team not only excels in their roles but also leads fulfilling lives outside of work."
            ></BenefitCard>
            <BenefitCard
              image={
                <Image
                  src="/no_meetings.svg"
                  alt="handing money"
                  width={100}
                  height={100}
                ></Image>
              }
              title="Flexible Time Off"
              description="Time off on you. Do whatever you want as long as youre here! No limitations at all whatsoever"
            ></BenefitCard>
            <BenefitCard
              image={
                <Image
                  src="/async.svg"
                  alt="handing money"
                  width={100}
                  height={100}
                ></Image>
              }
              title="Flexible Time Off"
              description="Time off on you. Do whatever you want as long as youre here! No limitations at all whatsoever"
            ></BenefitCard>
          </div>
        </div>
      </div>

      <div
        id="open-positions"
        style={{
          width: "100%",
          scrollMarginTop: "6.25rem",
          maxWidth: "62.5rem",
        }}
        className="section"
      >
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Open Positions
        </div>
        {Jobs.map((job, key) => (
          <PositionCard key={key} name={job.name} id={job.id}></PositionCard>
        ))}
      </div>
    </div>
  );
}
