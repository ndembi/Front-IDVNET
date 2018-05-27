import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Bootstrap module for app
import { BsDropdownModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap';
import { SortableModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { TimepickerModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TypeaheadModule.forRoot()
    
  ],
  exports: [FormsModule,BsDropdownModule, TooltipModule, ModalModule, AccordionModule, AlertModule, CarouselModule,
    CollapseModule, BsDatepickerModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule,
    SortableModule, TabsModule, TimepickerModule, TypeaheadModule],
  declarations: []
})
export class AppBootstrapModule { }
