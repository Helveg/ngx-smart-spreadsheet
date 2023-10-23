import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentEditableDirective } from './content-editable.directive';
import { NgxContextMenuItemComponent } from './ngx-context-menu-item.component';
import { NgxContextMenuComponent } from './ngx-context-menu.component';
import { NgxSmartSpreadsheetComponent } from './ngx-smart-spreadsheet.component';
import {LetDirective} from "@ngrx/component";



@NgModule({
  declarations: [
    NgxSmartSpreadsheetComponent,
    NgxContextMenuComponent,
    NgxContextMenuItemComponent,
    ContentEditableDirective,
  ],
  imports: [CommonModule, LetDirective],
  exports: [NgxSmartSpreadsheetComponent],
})
export class NgxSmartSpreadsheetModule {}
