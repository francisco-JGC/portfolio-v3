export interface Service {
  title: string;
  description: string;
  icon: string;
}
export const SERVICES: Service[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: "fa fa-solid fa-code",
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications and APIs.",
    icon: "fa fa-solid fa-server",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces and experiences.",
    icon: "fa fa-solid fa-paintbrush",
  },
  {
    title: "SEO Optimization",
    description: "Improving website visibility on search engines.",
    icon: "fa fa-solid fa-search",
  },
];
