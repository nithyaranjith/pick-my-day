import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { TravelComponent } from './pages/travel/travel.component';
import { SportsComponent } from './pages/sports/sports.component';
import { LoginComponent } from './pages/login/login.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { TheatreListComponent } from './pages/movies/theatre-list/theatre-list.component';
import { SeatBookingComponent } from './pages/movies/seat-booking/seat-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { BusBookingComponent } from './pages/travel/bus-booking/bus-booking.component';
import { SportsPayDoneComponent } from './pages/sports/sports-pay-done/sports-pay-done.component';
import { MovieModelComponent } from './pages/movies/movie-model/movie-model.component';
import { AppShellComponent } from './components/app-shell.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
   {
        path: "logout",
        component: LoginComponent
    },
    {
        path: '',
        component: AppShellComponent,
        children: [
            {
                path: "main",
                component: MainComponent
            },
    
    // {
    //     path: "home",
    //     component: HeaderComponent
    // },
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
        path: "movies-list",
        component: MoviesListComponent
    },
    {
        path: 'payment',
        component: PaymentComponent
    },
    {
        path: "theatre-list",
        component: TheatreListComponent
    },
    {
        path:"movie-model",
        component: MovieModelComponent
    },
    {
        path: "seat-booking",
        component: SeatBookingComponent
    },
    {
        path: "bus-booking",
        component: BusBookingComponent
    },
    {
        path: "sports-pay-done",
        component: SportsPayDoneComponent
    },
]
},
];
