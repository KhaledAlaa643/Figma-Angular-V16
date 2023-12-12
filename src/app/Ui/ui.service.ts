import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {myObject } from '../Ui/i18n/language'
@Injectable({
  providedIn: 'root'
})
export class UiService {
  data: any = {};
  languageOptions = [
    { id: 'ar', name: 'عربي' },
    { id: 'en', name: 'English' }
  ];
constructor() {
  this.data = myObject;
}
  selectedLanguageSubject = new BehaviorSubject<string>('ar');
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();
  updateSelectedLanguage(language: string): any {
    this.selectedLanguageSubject.next(language);
    return this.data[language]
  }
  getLanguageFile() {
    return myObject
  }
  getlanguageOptions() {
    return this.languageOptions
  }
}
