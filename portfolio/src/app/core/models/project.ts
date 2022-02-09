export interface Project {
    name: string;
    stack: [{ iconClasses: string, name: string }];
    description: string;
    sourceUrl: string;
    featured?: boolean;
}