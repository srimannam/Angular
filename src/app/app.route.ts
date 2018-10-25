import { HomeComponent } from './routes/home/home.component';
import { CoursesComponent } from './routes/courses/courses.component';
import { VclassesComponent } from './routes/vclasses/vclasses.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { EbooksComponent } from './routes/ebooks/ebooks.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { ScheduleComponent } from './components/schedule/schedule.component'

const routes = [
    {path:"",component:HomeComponent},
    {path:"courses",component:CoursesComponent},
    {path:"reviews",component:ReviewsComponent},
    {path:"offices",component:OfficesComponent},
    {path:"ebooks",component:EbooksComponent},
    {path:"vclasses",component:VclassesComponent},
    {path:"CDetails/:ccode",component:CoursedetailsComponent},
    {path:"Schedules",component:ScheduleComponent,outlet:"sidebar"},
];

export const Routemod:ModuleWithProviders = RouterModule.forRoot(routes);