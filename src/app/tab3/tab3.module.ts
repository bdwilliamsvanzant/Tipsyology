import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';


const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
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
    redirectTo: 'tab3',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
    //RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
