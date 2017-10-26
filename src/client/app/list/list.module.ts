import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCommonModule, MatChipsModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
    MatChipsModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule {}
