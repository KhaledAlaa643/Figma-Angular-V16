import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { MyTableComponent } from './my-table/my-table.component';

@NgModule({
  declarations: [
    ChartComponent,
    CardComponent,
    DashboardComponent,
    MyTableComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
    MatPaginatorModule,
    NgScrollbarModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    HttpClientModule  
  ]
})
export class UiModule { }
