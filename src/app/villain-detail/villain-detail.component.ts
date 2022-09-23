import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Villain } from "../villain";
import { VillainService } from "../villain.service";
import { Location } from "@angular/common";
import { HeroService } from "../hero.service";

@Component({
	selector: "app-villain-detail",
	templateUrl: "./villain-detail.component.html",
	styleUrls: ["./villain-detail.component.css"],
})
export class VillainDetailComponent implements OnInit {
	villain!: Villain;

	constructor(
		private route: ActivatedRoute,
		private villainService: VillainService,
		private heroService: HeroService,
		private location: Location
	) {}

	ngOnInit(): void {
		this.getVillain();
	}

	getVillain(): void {
		const id = parseInt(this.route.snapshot.paramMap.get("id")!, 10);
		this.villainService
			.getVillain(id)
			.subscribe((villain) => (this.villain = villain));
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
		if (!this.villain) {
			return;
		}

		this.villainService.updateVillain(this.villain).subscribe((_) => {
			this.goBack();
		});
	}
}
