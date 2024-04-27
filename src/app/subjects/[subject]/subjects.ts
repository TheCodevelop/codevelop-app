export interface Subject {
  name: string;
  id: string;
}

export interface SubjectGroup {
  name: string;
  subjects: Subject[];
}

export interface GradeLevel {
  name: string;
  subjectGroups: SubjectGroup[];
}
export const HighSchoolSubjectsMathematics: Subject[] = [
  { name: "AP Calculus AB", id: "ap-calculus-ab" },
  { name: "AP Calculus BC", id: "ap-calculus-bc" },
  { name: "Pre-Calculus", id: "pre-calculus" },
  { name: "Algebra 1", id: "algebra-1" },
  { name: "Algebra 2", id: "algebra-2" },
  { name: "Geometry", id: "geometry" },
];

export const HighSchoolSubjectsScience: Subject[] = [
  { name: "AP Biology", id: "ap-biology" },
  { name: "AP Chemistry", id: "ap-chemistry" },
  { name: "AP Physics", id: "ap-physics" },
  { name: "AP Psychology", id: "ap-psychology" },
  { name: "AP Computer Science", id: "ap-computer-science" },
  { name: "AP Environmental Science", id: "ap-environmental-science" },
];

export const HighSchoolSubjectGroups: SubjectGroup[] = [
  {
    name: "Mathematics",
    subjects: HighSchoolSubjectsMathematics,
  },
  {
    name: "Science",
    subjects: HighSchoolSubjectsScience,
  },
];
export const CollegeSubjectsMathematics: Subject[] = [
  { name: "Calculus 1", id: "calculus-1" },
  { name: "Calculus 2", id: "calculus-2" },
];

export const CollegeSubjectsScience: Subject[] = [
  { name: "General Biology 1 & 2", id: "general-biology-1-2" },
  { name: "General Chemistry 1 & 2", id: "general-chemistry-1-2" },
  { name: "Physics 1 & 2", id: "physics-1-2" },
  { name: "Introductory Psychology", id: "introductory-psychology" },
  { name: "Physiology", id: "physiology" },
  { name: "Anatomy", id: "anatomy" },
];

export const CollegeSubjectsAdvancedScience: Subject[] = [
  { name: "Neuroanatomy", id: "neuroanatomy" },
  { name: "Molecular Biology 1 & 2", id: "molecular-biology-1-2" },
  { name: "Organic Chemistry 1", id: "organic-chemistry-1" },
  { name: "Medical Biochemistry", id: "medical-biochemistry" },
  { name: "Neurobiology", id: "neurobiology" },
  { name: "Cognitive Psychology", id: "cognitive-psychology" },
  { name: "Developmental Psychology", id: "developmental-psychology" },
  { name: "Abnormal Psychology", id: "abnormal-psychology" },
  { name: "Health Psychology", id: "health-psychology" },
];

export const CollegeSubjectGroups: SubjectGroup[] = [
  {
    name: "Mathematics",
    subjects: CollegeSubjectsMathematics,
  },
  {
    name: "Science",
    subjects: CollegeSubjectsScience,
  },
  {
    name: "Advanced Science",
    subjects: CollegeSubjectsAdvancedScience,
  },
];

export const K8SubjectsGeneralStudies: Subject[] = [
  {
    name: "Introductory Science",
    id: "introductory-science",
  },
  {
    name: "Social Studies",
    id: "social-studies",
  },
  {
    name: "Basic Mathematics",
    id: "basic-mathematics",
  },
  {
    name: "Reading/Writing",
    id: "reading-writing",
  },
];

export const K8SubjectGroups: SubjectGroup[] = [
  {
    name: "General Studies",
    subjects: K8SubjectsGeneralStudies,
  },
];

export const GradeLevels: GradeLevel[] = [
  {
    name: "K-8",
    subjectGroups: K8SubjectGroups,
  },
  {
    name: "High School",
    subjectGroups: HighSchoolSubjectGroups,
  },
  {
    name: "College",
    subjectGroups: CollegeSubjectGroups,
  },
];
