import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'dragons', pathMatch: 'full' },
  { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule) },

  // Private Routes
  {
    path: 'dragons',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dragons/dragons.module').then(mod => mod.DragonsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
