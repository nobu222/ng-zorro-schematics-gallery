import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-select-search-box',
  templateUrl: './select-search-box.component.html'
})
export class SelectSearchBoxComponent {
  selectedValue = null;
  listOfOption: Array<{ value: string; text: string }> = [];
  nzFilterOption = () => true;

  constructor(private httpClient: HttpClient) {}

  search(value: string): void {
    this.httpClient
      .jsonp<{ result: Array<[string, string]> }>(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, 'callback')
      .subscribe(data => {
        const listOfOption: Array<{ value: string; text: string }> = [];
        data.result.forEach(item => {
          listOfOption.push({
            value: item[0],
            text: item[0]
          });
        });
        this.listOfOption = listOfOption;
      });
  }
}
