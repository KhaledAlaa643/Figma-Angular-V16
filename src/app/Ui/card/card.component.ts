import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
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
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.selectedLanguage = language;
          this.translations = this.uiService.getLanguageFile()
          this.data = this.translations[this.selectedLanguage]["card"]
          this.selectedLanguage == "ar" ? this.direction = "rtl" : this.direction = "ltr"          
      });
  }
  isRtl(): boolean {
    return this.direction === 'rtl';
  }
}
