import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
	selector: "app-heroes",
	templateUrl: "./heroes.component.html",
	styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
	heroes: Hero[] = [];

	constructor(private heroService: HeroService) {}

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService
			.getHeroes()
			.subscribe((heroes) => (this.heroes = heroes));
	}

	add(name: string): void {
		name = name.trim();
		if (!name) {
			return;
		}
		this.heroService.addHero({ name } as Hero).subscribe((hero) => {
			this.heroes.push(hero);
		});
	}

	/**
	 * Call delete hero service and update the page to reflect the changes.
	 */
	delete(hero: Hero): void {
		// Call delete hero service passing the ID and subscribe to the observable.
		this.heroService.deleteHero(hero.id).subscribe();
	}
}
