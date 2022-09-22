import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { VillainsComponent } from "./villains/villains.component";

const routes: Routes = [
	{ path: "", redirectTo: "/dashboard", pathMatch: "full" },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "detail/:id", component: HeroDetailComponent },
	{ path: "this-is-not-the-correct-path", component: HeroesComponent },
	{ path: "villains", component: VillainsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
