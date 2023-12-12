import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../ui.service';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit,AfterViewInit{
  translations: any = {};
  selectedLanguage!: string;
  direction: string = "rtl";
  languageSubscription!: Subscription;
  data: any = {};
  isChecked: boolean = true
  itemsPerPage = 4;
  page = 1;
  dataItems!: number;
  pageSizeOptions!: any
  selectedData: any[] = [];
  labelStyleClass: string = '';
  tableHeader!: any
  initialData :any [] = []
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private uiService: UiService,
    private cdr: ChangeDetectorRef 
) {
    this.pageSizeOptions = [5, 10, 50, 100]    
  }
  ngAfterViewInit(): void {
    this.languageSubscription = this.uiService.selectedLanguageSubject.subscribe(() => {
      this.updateElementProperties();
    });
  }
  ngOnInit(): void {
        // 1.subscribe on method to get the language and file from service
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.selectedLanguage = language;
          this.translations = this.uiService.getLanguageFile()
          this.data = this.translations[this.selectedLanguage]["table"]

          // 2.change the  direction 
          this.selectedLanguage == "ar" ? this.direction = "rtl" : this.direction = "ltr"
          
          // 3.Take first 5 items when the page load
          this.initialData = []
          for (let i = 1; i <= this.data.users.length && i <= 5; i++){
            this.initialData.push(this.data.users[i])
          }
          this.selectedData = this.initialData;
          
          // 4.save the header values to bind on it in table
          this.tableHeader = this.data.header[0];

        }); // end of subscribtion
    
        // set the items per page = 4 when the page load
        this.dataItems = this.itemsPerPage;
    
  } // end ngOninit

  
  // show 4 items only per page 
  get pagedData() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.selectedData.slice(startIndex, endIndex);
  }

  // change the items based on page size
  onPageChange(event: any, resetOption: boolean = true) {
    this.dataItems = event.pageSize;
    this.updateData(resetOption);
  }

  // update my selected data every time changed
  updateData(resetOption: boolean = true) {
    if (resetOption) {
      this.selectedData = [];
    }
    for (let i = 0; i < Math.min(this.dataItems, this.data.users.length); i++) {
      this.selectedData.push(this.data.users[i]);
    }
    return this
  }

  // Change Value & Styles in pagination
  private updateElementProperties(): void {
    const element = this.el.nativeElement.querySelector('#mat-paginator-page-size-label-0');
    const element2 = this.el.nativeElement.querySelector('.mat-mdc-paginator-range-label');
    if (element) {
      if (this.selectedLanguage === 'ar') {
        this.renderer.setProperty(element2, 'innerText', 'عرض');
        this.renderer.setProperty(element, 'innerText', `من أصل ${this.data.users.length}`);
        this.labelStyleClass = 'arabic-label';
      } else {
        this.renderer.setProperty(element, 'innerText', `Show`);
        this.renderer.setProperty(element2, 'innerText', `From ${this.data.users.length}`);
        this.labelStyleClass = 'english-label';
      }
        this.cdr.detectChanges();
    }
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

}

