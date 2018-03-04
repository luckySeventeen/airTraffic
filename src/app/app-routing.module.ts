import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FlightDetailsComponent} from './flight-details/flight-details.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'flightDetails/:id',
    component: FlightDetailsComponent
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}

