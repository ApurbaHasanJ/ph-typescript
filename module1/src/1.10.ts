{
  // union types

  type FrontedDev = "Fakibaj Dev" | "Junior Dev";
  type FullStackDev = "Frontend Dev" | "Expert Dev";

  type Developer = FrontedDev | FullStackDev;

  const newDev: FrontedDev = "Junior Dev";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const user1: User = {
    name: "John",
    // email: "john@gmail.com"
    gender: "male",
    bloodGroup: "O+",
  };

  type VRTXFrontDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type VRTXBackDev = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = VRTXFrontDev & VRTXBackDev;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["html", "css", "js", "php"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer"
  };
}
