import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';


// const routes: Routes = [
//   {
//     path: '',
//     component: Tab5Page,
//     children: [
//       {
//       path: 'tab5'
//       },
//       {
//         path: 'tab6',
//         loadChildren: '../tab6/tab6.module#Tab6PageModule'
//         }
//     ]
//   }
// ]

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab5Page }])
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
