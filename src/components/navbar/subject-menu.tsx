"use client";
import { variables } from "@/app/variables";
import styles from "./navbar.module.scss";
import SubjectCard from "./subject-card";
import { GradeLevels } from "@/app/subjects/[subject]/subjects";

interface SubjectMenuProps {
  closeMenu: () => void;
}

const SubjectMenu: React.FC<SubjectMenuProps> = ({ closeMenu }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
        color: "black",
      }}
    >
      {GradeLevels.map((level) => (
        <div key={level.name} style={{ flex: 1 }}>
          <div>{level.name}</div>
          {level.subjectGroups.map((group) => (
            <div key={group.name}>
              <h3>{group.name}</h3>
              <ul>
                {group.subjects.map((subject) => (
                  <li key={subject.id}>{subject.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SubjectMenu;
