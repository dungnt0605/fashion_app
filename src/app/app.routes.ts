import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LayoutWebsiteComponent } from './component/layout-website/layout-website.component';
import { LayoutAdminComponent } from './component/layout-admin/layout-admin.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutWebsiteComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full',
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductAdminComponent },
      { path: 'products/add', component: ProductAddComponent },
      { path: 'products/:id/edit', component: ProductEditComponent },
    ],
  },
];
// 1: Khai báo đường dẫn bao gồm path và component tương ứng
// 2: Sử dụng <router-outlet /> để hiển thị component tương ứng với path
// 3: Cần import trước khi sử dụng component <router-outlet />
// https://www.figma.com/board/gGtAtFbJRj7TAzQ6lV84PF/Untitled?node-id=0-1&t=HgDeuFjDD3DCoMOI-1

// PATH                         COMPONENT
// -------------------------------------
// ""                           LayoutWebsite
// about                    AboutPageComponent
// product                  ProductComponent
// product/:id              ProductDetailComponent

// admin                        LayoutAdmin
// admin/product            AdminProductComponent
// admin/product/add        AdminProductAddComponent
// admin/product/edit/:id   AdminProductEditComponent
