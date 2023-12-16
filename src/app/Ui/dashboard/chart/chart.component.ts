import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../ui.service';
import { ChartData, LanguageDataObj } from '../../ui';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  translations!: LanguageDataObj;
  languageSubscription!: Subscription;
  data!: ChartData;
  dataChart: any;
  options: any;
  direction!:string
    constructor(private uiService: UiService) {}

  ngOnInit() {
        // 1.subscribe on method to get the language and file from service
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.translations = this.uiService.getLanguageFile()
          this.data = this.translations["chart"];

          // 2.save the new direction value
          language == "ar" ? this.direction = "rtl" : this.direction = "ltr"

          //charts
          this.dataChart = {
            labels: this.data.labels,
            datasets: [
              {
                data: [80, 86, 83, 87, 85, 90, 85, 95, 82, 75, 85, 80],
                fill: false,
                borderColor: '#8A74F9',
                tension: 0.4,
              },
              
            ]
          },
          this.options = {
              plugins: {
                legend: {
                  display: false
                }
              }
          }
        }); // end subs
  } // end ngOninit
  
}
