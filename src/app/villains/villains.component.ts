import { Component, OnInit } from "@angular/core";
import { Villain } from "../villain";

@Component({
	selector: "app-villains",
	templateUrl: "./villains.component.html",
	styleUrls: ["./villains.component.css"],
})
export class VillainsComponent implements OnInit {
	villains: Villain[] = [];
    
	constructor() {}

	ngOnInit(): void {}
}
