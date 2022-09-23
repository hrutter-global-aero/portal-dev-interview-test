import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { VillainService } from "../villain.service";
import { Villain } from "../villain";

@Component({
	selector: "app-hero-detail",
	templateUrl: "./hero-detail.component.html",
	styleUrls: ["./hero-detail.component.css"],
})
export class HeroDetailComponent implements OnInit {
	hero: Hero | undefined;
	villains: Villain[] = [];

	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService,
		private villainService: VillainService,
		private location: Location
	) {}

	ngOnInit(): void {
		this.getHero();
		this.getVillains();
	}

	getHero(): void {
		const id = parseInt(this.route.snapshot.paramMap.get("id")!, 10);
		this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
	}

	getVillains(): void {
		this.villainService
			.getVillains()
			.subscribe((villains) => (this.villains = villains));
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
		if (!this.hero) {
			return;
		}

		// Update hero using observable service. When resolved, call goBack().
		this.heroService.updateHero(this.hero).subscribe((_) => {
			this.goBack();
		});
	}
}
