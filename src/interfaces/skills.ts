export interface SkillData {
  skills: Skill[];
}

export interface Skill {
  _id: string;
  name: string;
  stars: number;
  img: string;
}
