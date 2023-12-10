import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {myObject } from '../Ui/i18n/language'
@Injectable({
  providedIn: 'root'
})
export class UiService {
  data: any = {};
  constructor() { }
  selectedLanguageSubject = new BehaviorSubject<string>('ar');
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();
  updateSelectedLanguage(language: string): any {
    this.selectedLanguageSubject.next(language);
    this.data  = myObject
    return this.data[language]
    
  }
  getLanguageFile() {
    return myObject
  }
}
