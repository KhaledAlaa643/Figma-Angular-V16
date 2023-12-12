import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../ui.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  dataChart: any;
  options: any;
  translations: any = {};
  selectedLanguage: string = 'ar';
  direction!:string
  languageSubscription!: Subscription;
  data: any = {};
    constructor(private uiService: UiService) {}

  ngOnInit() {
        // 1.subscribe on method to get the language and file from service
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.selectedLanguage = language;
          this.translations = this.uiService.getLanguageFile()
          this.data = this.translations[this.selectedLanguage]["chart"];

          // 2.save the new direction value
          this.selectedLanguage == "ar" ? this.direction = "rtl" : this.direction = "ltr"

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
