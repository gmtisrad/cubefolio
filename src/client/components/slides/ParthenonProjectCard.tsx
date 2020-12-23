import React from "react";
import {
  projectWrapperStyle,
  parthenonDutyListStyle,
  parthenonDutyListItemStyle,
} from "./slidesStyles";

type Props = {
  project: string;
  duties: string[];
};

export const ParthenonProjectCard: React.FC<Props> = (props: Props) => {
  const { project, duties } = props;
  return (
    <div className={projectWrapperStyle}>
      <h3>{project}</h3>
      <ul className={parthenonDutyListStyle}>
        {duties.map((duty: string) => (
          <li key={duty} className={parthenonDutyListItemStyle}>
            {duty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParthenonProjectCard;
