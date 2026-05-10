import { routerLinks } from "../links";
import type { LanguageItem } from "@/types/typesDapp/language";

export interface NavLink {
    name: LanguageItem;
    href: string;
    target: "_self" | "_blank";
}

export const navLinks: NavLink[] = [
    { name: { en: "Home", zh: "首页", ko: "홈" }, href: "/", target: "_self" },
    { name: { en: "Demo", zh: "演示", ko: "데모" }, href: "/demo", target: "_self" },
    { name: { en: "Tech", zh: "技术", ko: "기술" }, href: "/technology", target: "_self" },
    { name: { en: "Roadmap", zh: "路线图", ko: "로드맵" }, href: "/roadmap", target: "_self" },
    { name: { en: "Team", zh: "团队", ko: "팀" }, href: "/team", target: "_self" },
    { name: { en: "Blogs", zh: "博客", ko: "블로그" }, href: routerLinks.blogs, target: "_blank" },
    { name: { en: "Docs", zh: "文档", ko: "문서" }, href: routerLinks.docs, target: "_blank" },
];
