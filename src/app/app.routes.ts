import { Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TravelComponent } from './pages/travel/travel.component';
import { SportsComponent } from './pages/sports/sports.component';
import { LoginComponent } from './pages/login/login.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';

export const routes: Routes = [
    // {
    //     path: "",
    //     component: HeaderComponent,
    //     children: [
    //         {
    //             path: "movies",
    //             component: MoviesComponent
    //         },
    //         {
    //             path: "travel",
    //             component: TravelComponent
    //         },
    //         {
    //             path: "sports",
    //             component: SportsComponent
    //         },
    //         {
    //             path: "logout",
    //             component: LogoutComponent
    //         },
    //     ]
    // },
    {
        path: "",
        component: HeaderComponent
    },
    {
        path: "movies",
        component: MoviesComponent,
        
    },
    {
        path: "travel",
        component: TravelComponent
    },
    {
        path: "sports",
        component: SportsComponent
    },
    {
        path: "logout",
        component: LoginComponent
    },
    {
        path: "movies-list",
        component: MoviesListComponent
    }
];
