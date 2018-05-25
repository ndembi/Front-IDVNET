import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Bootstrap module for app
import { BsDropdownModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, AccordionModule,AlertModule CarouselModule],
  declarations: []
})
export class AppBootstrapModule { }
