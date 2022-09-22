import { Villain } from "./villain";

export interface Hero {
	id: number;
	name: string;
	currentVillian: Villain;
}
