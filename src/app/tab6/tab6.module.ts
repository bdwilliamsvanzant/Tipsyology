import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab6Page } from './tab6.page';


const routes: Routes = [
  {
    path: '',
    component: Tab6Page,
    children: [
      {
      path: 'tab5',
      loadChildren: '../tab5/tab5.module#Tab5PageModule'
      },
      {
        path: 'tab6',
        loadChildren: '../tab6/tab6.module#Tab6PageModule'
        }
    ]
  },
  {
    path: '',
    redirectTo: 'tab6',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
    //RouterModule.forChild([{ path: '', component: Tab6Page }])
  ],
  declarations: [Tab6Page]
})
export class Tab6PageModule {}
