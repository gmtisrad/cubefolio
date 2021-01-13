import React, { useContext, useState, useEffect } from "react";
import { css, cx } from "@emotion/css";
import ThemeContext from "../src/client/context/ThemeContext";
import { getTextColor } from "../src/client/utils/styleUtils";
import { introWrapperStyle } from "../src/client/components/slides/IntroSlide";

export const FrontEndSlide: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  const SkillMeter = (props: any) => {
    const { name, percent, color, subSkill } = props;
    const { light, dark, neon } = useContext(ThemeContext);
    const [textColor, setTextColor] = useState("");

    useEffect(() => {
      setTextColor(getTextColor(light, neon, dark));
    }, [light, dark, neon]);

    const skillMeterWrapperStyles = (subSkill: boolean) => css`
      margin: 15px 0;
      ${subSkill ? "padding-left: 20px;" : ""}
      ${subSkill ? "font-size: 16px;" : "font-size: 20px;"}
      height: ${subSkill ? "15px" : "20px"};
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-shadow: none;
    `;

    const skillLevelStyles = (percentage: number, color: string): string => css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 10px;
      height: 100%;
      width: ${percentage}%;
      border-radius: 15px;
      background-color: ${color};
      box-shadow: 0 0 3px 0 ${color};
    `;

    const skillStyle = (subSkill: boolean) => css`
      border-radius: 15px;
      // border: 1px solid black;
      box-shadow: 0px 0px 3px 3px ${textColor};
      background-color: ${textColor};
      width: 70%;
      height: 100%;
      color: ${textColor};
      font-weight: 600;
      font-size: 24px;
      ${subSkill ? "width: 60%;" : ""}
    `;

    return (
      <div
        className={cx(skillMeterWrapperStyles(subSkill), "skill-meter-wrapper")}
      >
        <span>{name}</span>
        <div className={cx(skillStyle(subSkill), "skill")}>
          <div
            className={cx(
              skillLevelStyles(percent, color),
              "skill-meter-content"
            )}
          ></div>
        </div>
      </div>
    );
  };

  const skillColumnsStyles = css`
    display: flex;
    align-items: flex-start;
    width: 100%;
  `;

  const skillColumnStyle = css`
    width: 50%;
    padding: 0 20px;
  `;

  return (
    <div
      className={cx(
        skillsStyles(textColor),
        introWrapperStyle(textColor),
        "skills-wrapper"
      )}
    >
      <h1>My ToolBox</h1>
      <div className={cx(skillColumnsStyles, "skill-columns-wrapper")}>
        <div className={cx(skillColumnStyle, "skill-column-wrapper")}>
          <SkillMeter name={"HTML"} percent={100} color={"#f16529"} />
          <SkillMeter name={"CSS"} percent={100} color={"#eb4222"} />
          <SkillMeter name={"JavaScript"} percent={100} color={"#89cf2d"} />
          <SkillMeter
            name={"React"}
            percent={100}
            borderColorborderColor
            color={"#89cf2d"}
            subSkill={true}
          />
          <SkillMeter
            name={"WebPack"}
            percent={100}
            color={"#89cf2d"}
            subSkill={true}
          />
          <SkillMeter
            name={"TypeScript"}
            percent={100}
            color={"#89cf2d"}
            subSkill={true}
          />
          <SkillMeter
            name={"Node"}
            percent={100}
            color={"#89cf2d"}
            subSkill={true}
          />
          <SkillMeter name={"Python"} percent={100} color={"#f7c434"} />
          <SkillMeter
            name={"Django"}
            percent={100}
            color={"#f7c434"}
            subSkill={true}
          />
          <SkillMeter
            name={"Flask"}
            percent={100}
            color={"#f7c434"}
            subSkill={true}
          />
          <SkillMeter
            name={"TF/Keras"}
            percent={100}
            color={"#f7c434"}
            subSkill={true}
          />
        </div>{" "}
        <div className={cx(skillColumnStyle, "skill-column-wrapper")}>
          <SkillMeter name={"Git"} percent={100} color={"#984a99"} />
          <SkillMeter name={"AWS"} percent={100} color={"#29a8e0"} />
          <SkillMeter
            name={"EC2"}
            percent={100}
            color={"#29a8e0"}
            subSkill={true}
          />
          <SkillMeter
            name={"Fargate"}
            percent={100}
            color={"#29a8e0"}
            subSkill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FrontEndSlide;
