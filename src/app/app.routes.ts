import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
      path:"",
      component:ProductListComponent,
      title:"Home"
    },
    {
        path:"register-page",
        component:RegisterComponent,
        title:"Registration page"
    },
    {
        path:"login-page",
        component:LoginComponent,
        title:"Login Page"
    },
    {
        path:"cart-page",
        component:CartComponent,
        title:"Cart"
    },
    {
       path:"product-details/:id",
       component:ProductDetailsComponent,
       title:"Product Details"
    },
    {
        path:"**",
        component:NotfoundComponent,
        title:"Not Found"
    }

];
