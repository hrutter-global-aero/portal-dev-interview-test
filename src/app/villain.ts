import { Hero } from "./hero";

export interface Villain {
	id: number;
	name: string;
	dateOfBirth: Date;
	currentHero: Hero;
}
