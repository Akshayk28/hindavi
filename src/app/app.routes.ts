import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'places', component: PlacesComponent },
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }