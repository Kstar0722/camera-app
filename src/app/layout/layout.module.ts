import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent, MainComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
