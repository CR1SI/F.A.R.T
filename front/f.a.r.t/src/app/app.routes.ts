import { Routes } from '@angular/router';
import { News } from './news/news';
import { Notfoundcomponent } from './notfoundcomponent/notfoundcomponent';
import { Home } from './home/home';
import { PickEms } from './pick-ems/pick-ems';
import { Schedule } from './schedule/schedule';
import { Standings } from './standings/standings';
import { Teams } from './teams/teams';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'news',
        component: News,
    },
    {
        path: 'pick-ems',
        component: PickEms,
    },
    {
        path: 'schedule',
        component: Schedule,
    },
    {
        path: 'standings',
        component: Standings,
    },
    {
        path: 'teams',
        component: Teams,
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: '**',
        component: Notfoundcomponent,
    },
];
