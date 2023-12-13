import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MyTableComponent } from './dashboard/my-table/my-table.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { CardComponent } from './dashboard/card/card.component';

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
  ]
})
export class UiModule { }
