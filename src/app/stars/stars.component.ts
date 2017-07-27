import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  // 2这个是保证能从父组件那获取数据
  @Input()
  private rating:number = 0;

  // 1定义一个星星数组
  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    // 3先把数组stars初始化
    this.stars = [];
    // 4因为是五星评价  所以拿五星（数组索引+1）和当前评分作比较  如果
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
