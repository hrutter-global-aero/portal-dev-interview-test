import { Hero } from "./hero";

export interface Villain {
	id: number;
	name: string;
	nemesis: Hero;
}
