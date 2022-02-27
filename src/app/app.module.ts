// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Components
import { LandingComponent } from './pages/landing/landing.component';
import { AppComponent } from './app.component';
import { CharacterComponent } from './pages/character/character.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { MyTeamComponent } from './pages/my-team/my-team.component';
import { SearchComponent } from './components/search/search.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TeamFormDialogComponent } from './components/dialogs/team-form-dialog/team-form-dialog.component';
import { GenericErrorDialogComponent } from './components/dialogs/generic-error-dialog/generic-error-dialog.component';
// Modules
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
// Interceptors
import { LoadingInterceptor } from './interceptors/loading.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    CharacterCardComponent,
    CharacterComponent,
    MyTeamComponent,
    SearchComponent,
    TeamFormDialogComponent,
    SpinnerComponent,
    GenericErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    InfiniteScrollModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
