import { Component, OnInit } from '@angular/core';
import { UiService } from '../../ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  translations: any = {};
  selectedLanguage!: string;
  direction!: string;
  languageSubscription!: Subscription;
  data: any = {};

  constructor(private uiService: UiService) {}
  ngOnInit(): void {
        // 1.subscribe on method to get the language and file from service
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.selectedLanguage = language;
          this.translations = this.uiService.getLanguageFile()
          this.data = this.translations[this.selectedLanguage]["card"]

          // 2.save the new direction value
          this.selectedLanguage == "ar" ? this.direction = "rtl" : this.direction = "ltr"          
      });
  }
  ngOnDestroy(): void {
      this.languageSubscription.unsubscribe();
    }
  
}
