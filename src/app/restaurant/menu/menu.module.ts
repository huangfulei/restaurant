import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BodyModule, GridModule} from '@progress/kendo-angular-grid';
import {DropDownListModule} from '@progress/kendo-angular-dropdowns';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {PopupModule} from '@progress/kendo-angular-popup';
import {PopupAnchorDirective} from './popup.anchor-target.directive';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [MenuComponent, PopupAnchorDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    DropDownListModule,
    PopupModule,
    InputsModule,
    SharedModule,
    BodyModule
  ]
})
export class MenuModule {
}
