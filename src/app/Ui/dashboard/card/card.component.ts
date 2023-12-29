import { Component, OnInit } from '@angular/core';
import { UiService } from '../../ui.service';
import { Subscription } from 'rxjs';
import { CardData } from '../../ui';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  data!: CardData;
  languageSubscription!: Subscription;
  direction!: string;
constructor(private uiService: UiService) { }
  ngOnInit(): void {
        // 1.subscribe on method to get the language and file from service
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.data = this.uiService.getLanguageFile("card")
          
          // 2.save the new direction value
          language == "ar" ? this.direction = "rtl" : this.direction = "ltr"          
          
        });
  }
  ngOnDestroy(): void {
      this.languageSubscription.unsubscribe();
    }
  
}
