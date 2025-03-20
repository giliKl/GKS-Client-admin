import { Routes } from '@angular/router';
import { authGuard } from '../Guards/auth.guard';
import { LoginComponent } from '../Components/login/login.component';
import { ApplayoutComponent } from '../Components/applayout/applayout.component';
import { UsersListComponent } from '../Components/users-list/users-list.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '', component: ApplayoutComponent, canActivate: [authGuard], children: [
            {path:'',component:DashboardComponent},
            { path: 'users', component: UsersListComponent },
            // { path: 'course-details/:courseId', component: CourseDetailsComponent, children:[
            //     {path:'update-lesson/:lessonId',component:LessonUpdateComponent}]},
            // { path: 'add-course/:userId', component:AddCourseComponent },
            // { path: 'update-course/:courseId', component: EditCourseComponent }        
            ]
    },
    {path:'login',component:LoginComponent},
    // {path:'register',component:RegisterComponent}
];
