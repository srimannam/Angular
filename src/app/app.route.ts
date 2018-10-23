import { HomeComponent } from './routes/home/home.component';
import { CoursesComponent } from './routes/courses/courses.component';
import { VclassesComponent } from './routes/vclasses/vclasses.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { EbooksComponent } from './routes/ebooks/ebooks.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes = [
    {path:"",component:HomeComponent},
    {path:"courses",component:CoursesComponent},
    {path:"reviews",component:ReviewsComponent},
    {path:"offices",component:OfficesComponent},
    {path:"ebooks",component:EbooksComponent},
    {path:"vclasses",component:VclassesComponent},
];

export const Routemod:ModuleWithProviders = RouterModule.forRoot(routes);