import { Component } from '@angular/core';
import { HatenaService } from '../service/hatena.service';

@Component({
  selector: 'app-hatena',
  templateUrl: './hatena.component.html',
  styleUrls: ['./hatena.component.css']
})
export class HatenaComponent {
  targetUrl: string = '';
  count: number = 0;
  comments: string[] = [];

  constructor(private hatenaService: HatenaService) { }

  onclick() {
    this.hatenaService.requestGet(this.targetUrl).subscribe(
      (entries) => {
        console.log(entries);
        if (entries == null) {
          this.comments = [];
          this.count = 0;
          return;
        }
        let result: string[] = [];
        let resultCnt: number = 0;
        entries.bookmarks.forEach(function (value: any) {
          if (value.comment !== '') {
            result.push(value.comment);
            resultCnt++;
          }
        });
        this.comments = result;
        this.count = resultCnt;
      }
    );
  }
}
