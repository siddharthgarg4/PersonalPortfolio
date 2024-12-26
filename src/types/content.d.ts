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
  description: string;
  recommenderImage: string;
  recommenderName: string;
  recommenderPosition: string;
}

//AboutMeType
interface AboutMeType {
  description: string;
  github: string;
  linkedin: string;
  email: string;
}

// src/types/content.d.ts
declare module "@/assets/content.json" {
  // define the json structure
  const value: {
    [key: string]: ExperienceType | RecommendationType | AboutMeType;
  };
  export default value;
}
