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
  direction!:string
  constructor(private renderer: Renderer2, private el: ElementRef,private uiService:UiService) {
    this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
        this.selectedLanguage = language;
      }
    );
  }
  ngOnInit(): void {
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.selectedLanguage = language;
          this.translations = this.uiService.getLanguageFile()
          this.data = this.translations[this.selectedLanguage]["dashboard"]
          this.selectedLanguage =="ar" ? this.direction = "rtl" : this.direction = "ltr"
          
        });
    
    
  }

  onLanguageChange(event: any): void {
    const selectedLanguage = event.target.options[event.target.selectedIndex].id;
    this.uiService.updateSelectedLanguage(selectedLanguage);
    }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
