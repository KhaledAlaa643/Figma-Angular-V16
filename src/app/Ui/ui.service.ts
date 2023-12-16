import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {myLanguages } from '../Ui/i18n/language'
@Injectable({
  providedIn: 'root'
})
export class UiService {
  data: any = {};
  language!:string
  languageOptionsAr = [
    { id: 'ar', name: 'عربي' },
    { id: 'en', name: 'English' },
  ];
  languageOptionsEn = [
    { id: 'en', name: 'English' },
    { id: 'ar', name: 'عربي' },
  ];
constructor() {
  this.data = myLanguages;
}
  selectedLanguageSubject = new BehaviorSubject<string>('ar');
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();
  
  updateSelectedLanguage(language: string): any {
    this.selectedLanguageSubject.next(language);
    return this.data[language]
  }
  getLanguageFile() {
    this.language = this.selectedLanguageSubject.getValue()    
    return myLanguages[this.language]
  }
  getlanguageOptions() {
    this.language = this.selectedLanguageSubject.getValue()
    if (this.language == "ar") {
      return this.languageOptionsAr
    } else return this.languageOptionsEn
    }
}
