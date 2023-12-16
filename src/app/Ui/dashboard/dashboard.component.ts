import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UiService } from '../ui.service';
import { Subscription } from 'rxjs';
import { MyTableComponent } from './my-table/my-table.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  data!: any ;
  languageSubscription!: Subscription;
  direction!: string
  languageOptions: any = {}
  @ViewChild(MyTableComponent) tableComponent!: MyTableComponent;

  constructor(private uiService:UiService) {}
  ngOnInit(): void {
       // 1.subscribe on method to get the language and file from service
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.data = this.uiService.getLanguageFile("dashboard")
        
        // 2.save the new direction value
          language =="ar" ? this.direction = "rtl" : this.direction = "ltr"
        });

        // get the language from service
        this.languageOptions = this.uiService.getlanguageOptions()
  } // end of ngOninit

  // change the direction based on language
  onLanguageChange(event: any): void {
    const selectedLanguage = event.target.options[event.target.selectedIndex].id;
    this.uiService.updateSelectedLanguage(selectedLanguage);
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
