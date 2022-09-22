import { Component, OnInit } from "@angular/core";
import { Villain } from "../villain";
import { VillainService } from "../villain.service";

@Component({
	selector: "app-villains",
	templateUrl: "./villains.component.html",
	styleUrls: ["./villains.component.css"],
})
export class VillainsComponent implements OnInit {
	villains: Villain[] = [];

	constructor(private villainService: VillainService) {}

	ngOnInit(): void {
		this.getVillains();
	}

	getVillains() {
		this.villainService
			.getVillains()
			.subscribe((villains) => (this.villains = villains));
	}

	delete(villain: Villain): void {
		// Filter out deleted villain from villain list
		this.villains = this.villains.filter((v) => v !== villain);

		// Call delete villain service passing the ID and subscribe to the observable
		this.villainService.deleteVillain(villain.id).subscribe();
	}
}
