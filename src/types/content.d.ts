//ExperienceType
interface ExperienceType {
  title: string;
  subtitle: string;
  coverImageName: string;
  description: string;
  overlayTitle: string;
  link: string;
  experienceType: "internship" | "full-time" | "project";
  highlightedWords?: string[];
}

//RecommendationType
interface RecommendationType {
  recommenderName: string;
  recommenderImage: string;
  recommenderPosition: string;
  recommendationDescription: string;
}

//AboutMeType
interface AboutMeType {
  description: string;
  github: string;
  linkedin: string;
  email: string;
  resume: string;
  keySkills: string[];
}

// src/types/content.d.ts
declare module "@/assets/content.json" {
  // define the json structure
  const value: {
    [key: string]: ExperienceType | RecommendationType | AboutMeType;
  };
  export default value;
}
