import type { LayoutServerLoad } from "./$types";

interface Project {
    name: string;
    description: string;
    link: string;
    tools: string[];
}

const projects: Project[] = [
    {
        name: "Gelt",
        description: "Gelt – Svelte-like framework for Go.",
        link: "https://github.com/struckchure/gelt",
        tools: ["Golang", "HTML", "WASM"]
    },
    {
        name: "Formatio",
        description: "Formatio is an open-source cloud platform that simplifies application deployment and management.",
        link: "https://github.com/Overal-X/formatio",
        tools: ["Golang", "Postgres", "TypeScript", "Svelte"]
    },
    {
        name: "Storm",
        description: "Storm is an automation agent that helps to run workflows on remote or local machines.",
        link: "https://github.com/Overal-X/storm",
        tools: ["Golang"]
    },
    {
        name: "xRPC",
        description: "RPC Framework for Golang.",
        link: "https://github.com/struckchure/xrpc",
        tools: ["Golang"]
    },
    {
        name: "Melid",
        description: "Melid is a PyQt5 Library for Desktop Applications containing commonly used utils and advanced widget implementations in very simple forms.",
        link: "https://github.com/struckchure/melid",
        tools: ["Python"]
    },
    {
        name: "Steroid",
        description: "FastAPI on steroids. Inspired by NestJs",
        link: "https://github.com/struckchure/steroid",
        tools: ["Python", "FastAPI"]
    },
    {
        name: "Recipe",
        description: "A collection of various demo projects that I have created to showcase different technologies, programming languages, and techniques.",
        link: "https://github.com/struckchure/recipe",
        tools: ["Terraform", "Kubernetes", "Docker", "gRPC", "Golang", "TypeScript", "Python", "Ansible"]
    }
]

export const load: LayoutServerLoad = () => {
    return { projects }
};
