import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Villain } from "../villain";
import { VillainService } from "../villain.service";
import { Location } from "@angular/common";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";

@Component({
	selector: "app-villain-detail",
	templateUrl: "./villain-detail.component.html",
	styleUrls: ["./villain-detail.component.css"],
})
export class VillainDetailComponent implements OnInit {
	villain!: Villain;
	heroes: Hero[] = [];

	constructor(
		private route: ActivatedRoute,
		private villainService: VillainService,
		private heroService: HeroService,
		private location: Location
	) {}

	ngOnInit(): void {
		this.getVillain();
		this.getHeroes();
	}

	getVillain(): void {
		const id = parseInt(this.route.snapshot.paramMap.get("id")!, 10);
		this.villainService
			.getVillain(id)
			.subscribe((villain) => (this.villain = villain));
	}

	getHeroes(): void {
		this.heroService
			.getHeroes()
			.subscribe((heroes) => (this.heroes = heroes));
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
		if (!this.villain) {
			return;
		}

		console.log("HR - villain", this.villain);

		this.villainService.updateVillain(this.villain).subscribe((_) => {
			this.goBack();
		});
	}
}
