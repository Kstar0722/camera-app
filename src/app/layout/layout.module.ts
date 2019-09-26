import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    MainComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    TopbarComponent,
    MainComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
