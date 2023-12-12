import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UiService } from '../ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  translations: any = {};
  selectedLanguage!: string;
  languageSubscription!: Subscription;
  data: any = {};
  direction!: string
  languageOptions:any = {}
  constructor(private uiService:UiService) {}
  ngOnInit(): void {
       // 1.subscribe on method to get the language and file from service
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.selectedLanguage = language;
          this.translations = this.uiService.getLanguageFile()
          this.data = this.translations[this.selectedLanguage]["dashboard"]

        // 2.save the new direction value
          this.selectedLanguage =="ar" ? this.direction = "rtl" : this.direction = "ltr"
        });
    this.languageOptions = this.uiService.getlanguageOptions()    
  }
  // change the direction based on language
  onLanguageChange(event: any): void {
    const selectedLanguage = event.target.options[event.target.selectedIndex].id;
    this.uiService.updateSelectedLanguage(selectedLanguage);
    
    }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
