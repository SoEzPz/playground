import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from './text.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TextService
  ]
})

export class RandomTextModule {}
