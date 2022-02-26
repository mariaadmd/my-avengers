import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';

import { LandingComponent } from './pages/landing/landing.component';
import { MyTeamComponent } from './pages/my-team/my-team.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'myTeam', component: MyTeamComponent },
  { path: 'character/:id', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
