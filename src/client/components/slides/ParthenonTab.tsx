/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ParthenonProjectCard from "./ParthenonProjectCard";
import parthenonLogo from "../../assets/ParthenonLogo.png";
import {
  projectsStyle,
  parthenonImageStyle,
  parthInfo,
  parthenonHeaderStyle,
  parthenonBodyStyle,
  projectCardsStyle,
} from "./slidesStyles";
import { cx } from "@emotion/css";

const intelDuties = [
  "Decreased the latency of the Intel Unite Android app from up to 30 seconds and increased the frame-rate by 400% (.25 FPS to upwards of 1 FPS)",
  "Rapidly implemented last minute features/optimizations at the request of Intel's clients, allowing their sales team to land their client",
  "Evaluated and prioritized security vulnerabilities identified by third party analysts",
];

const bpnsDuties = [
  "Built the infrastructure for a React based Learning Management System (LMS)",
  "Built the CI/CD pipeline for a Gitlab hosted repository that deploys to AWS Fargate using dockerized environments",
  "Set up the AWS VPC's, Subnets, Security Groups, and Load Balancers for our EC2 and ECS Instances",
  "Designed scalable data models for the LMS application",
];

export const ParthenonTab: React.FC = () => {
  return (
    <div className={cx("parthenon-body", parthenonBodyStyle)}>
      <div className={cx("parthenon-header", parthenonHeaderStyle)}>
        <h3>Parthenon Software Group</h3>
        <span>March 2019 - March 2020</span>
        <br />
        <img
          alt="parthenon software logo"
          className={parthenonImageStyle}
          src={parthenonLogo}
        />
        <div className={parthInfo}>
          <p>
            My time at parthenon allowed me to get my hands on just about every
            software medium there is. I've green-fielded LMS applications for
            Bay Area startups, and I've provided maintenance and feature work on
            Android for fortune 500 companies in my own neighborhood. The
            greatest thing I learned here was how to learn quickly and feel
            comfortable working in areas I had very little experience.
          </p>
        </div>
        <div className={projectsStyle}>
          <div className={projectCardsStyle}>
            <ParthenonProjectCard project="Intel Unite" duties={intelDuties} />
            <ParthenonProjectCard
              project="Blueprint/Next Step"
              duties={bpnsDuties}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParthenonTab;
