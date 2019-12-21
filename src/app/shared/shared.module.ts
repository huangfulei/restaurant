import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule
  ],
  exports: [
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
