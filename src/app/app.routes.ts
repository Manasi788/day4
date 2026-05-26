import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Contact } from './page/contact/contact';
import { Product } from './page/product/product';
import { Productdetails } from './page/productdetails/productdetails';

export const routes: Routes = [
     {
        path:'',component:Home
    },
    {
        path:'about',component:About
    },
    {
        path:'product',component:Product
    },
    {
        path:'contact',component:Contact
    },
    {
         path:"productdetails/:id",component:Productdetails
    },
];
