import { Component } from '@angular/core';

@Component({
  selector: 'app-table-default-filter',
  templateUrl: './table-default-filter.component.html'
})
export class TableDefaultFilterComponent {
  listOfName = [{ text: 'Joe', value: 'Joe', byDefault: true }, { text: 'Jim', value: 'Jim' }];
  listOfAddress = [{ text: 'London', value: 'London', byDefault: true }, { text: 'Sidney', value: 'Sidney' }];
  listOfSearchName = ['Joe']; // You need to change it as well!
  sortName: string | null = null;
  sortValue: string | null = null;
  searchAddress = 'London';
  listOfData: Array<{ name: string; age: number; address: string; [key: string]: string | number }> = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  // You need to change it as well!
  listOfDisplayData: Array<{ name: string; age: number; address: string; [key: string]: string | number }> = [];

  sort(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    console.log(listOfSearchName, searchAddress);
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    /** filter data **/
    const filterFunc = (item: { name: string; age: number; address: string }) =>
      (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) &&
      (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.listOfData.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.listOfDisplayData = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortName!] > b[this.sortName!]
            ? 1
            : -1
          : b[this.sortName!] > a[this.sortName!]
          ? 1
          : -1
      );
    } else {
      this.listOfDisplayData = data;
    }
  }
}
