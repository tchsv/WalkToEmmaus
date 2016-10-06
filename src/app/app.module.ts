import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './services/data.service';
import { CommunityComponent } from './community/community.component';
import { ClusterComponent } from './cluster/cluster.component';
import { TeamComponent } from './team/team.component';
import { WalkComponent } from './walk/walk.component';
import { CatsComponent } from './cats/cats.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { TeamSelectionComponent } from './team-selection/team-selection.component';

const routing = RouterModule.forRoot([
    { path: '',      component: HomeComponent },
    { path: 'team', component: TeamComponent },
    { path: 'community', component: CommunityComponent },
    { path: 'cluster', component: ClusterComponent },
    { path: 'walk', component: WalkComponent },
    { path: 'teammgt', component: TeamManagementComponent },
    { path: 'teamselect', component: TeamSelectionComponent },
    { path: 'cat', component: CatsComponent },
    { path: 'about', component: AboutComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CommunityComponent,
    ClusterComponent,
    TeamComponent,
    WalkComponent,
    CatsComponent,
    TeamManagementComponent,
    TeamSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    DataService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
