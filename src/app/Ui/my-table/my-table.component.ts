import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../ui.service';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {
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
  tableHeader!:any
  constructor(private renderer: Renderer2, private el: ElementRef, private uiService: UiService,
    private paginator: MatPaginatorIntl) {
    this.pageSizeOptions = [5, 10, 50, 100]
    console.log(this.paginator);
    
  }
  ngOnInit(): void {
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.selectedLanguage = language;
          this.translations = this.uiService.getLanguageFile()
          this.data = this.translations[this.selectedLanguage]["table"]
          this.selectedLanguage == "ar" ? this.direction = "rtl" : this.direction = "ltr"
          this.selectedData = this.data.users
          this.tableHeader = this.data.header[0];
          
          const element2 = this.el.nativeElement.querySelector('.mat-mdc-paginator-range-label');
            if (this.direction === 'rtl') {
              this.renderer.setProperty(element2, 'innerText', 'عرض');
              this.paginator.itemsPerPageLabel = `من أصل ${this.data.users.length}`;
              this.labelStyleClass = 'arabic-label';
            } else {
              this.paginator.itemsPerPageLabel = `Show`;
              this.renderer.setProperty(element2, 'innerText', `From ${this.data.users.length}`);
              this.labelStyleClass = 'english-label';
              }
        });
        this.dataItems = this.itemsPerPage;
      }
  isRtl(): boolean {
    return this.direction === 'rtl';
  }
  get pagedData() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.selectedData.slice(startIndex, endIndex);
  }
  onPageChange(event: any, resetOption: boolean = true) {
    this.dataItems = event.pageSize;
    this.updateData(resetOption);
  }
  updateData(resetOption: boolean = true) {
    if (resetOption) {
      this.selectedData = [];
    }
    for (let i = 0; i < Math.min(this.dataItems, this.data.users.length); i++) {
      this.selectedData.push(this.data.users[i]);
    }
    return this
  }

}

