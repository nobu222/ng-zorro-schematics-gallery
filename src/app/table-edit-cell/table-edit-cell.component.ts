import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NzInputDirective } from 'ng-zorro-antd';

@Component({
  selector: 'app-table-edit-cell',
  templateUrl: './table-edit-cell.component.html',
  styleUrls: ['./table-edit-cell.component.css']
})
export class TableEditCellComponent implements OnInit {
  i = 0;
  editId: string | null;
  listOfData: any[] = [];
  @ViewChild(NzInputDirective, { read: ElementRef }) inputElement: ElementRef;

  @HostListener('window:click', ['$event'])
  handleClick(e: MouseEvent): void {
    if (this.editId && this.inputElement && this.inputElement.nativeElement !== e.target) {
      this.editId = null;
    }
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Edward King ${this.i}`,
        age: '32',
        address: `London, Park Lane no. ${this.i}`
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  startEdit(id: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.editId = id;
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }
}
