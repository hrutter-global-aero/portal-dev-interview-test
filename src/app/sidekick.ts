import { Hero } from "./hero";

export interface Sidekick {
    id: number;
    name: string;
    dateOfBirth: Date;
    currentHero: Hero
}