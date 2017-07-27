import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 3申明一个数组products
  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    // 4钩子函数  当页面首次加载的时候就把这些数据填进去
    this.products = [
      new Product(1, '111', 1.23, 2.3, '这里是产品描述11', ['电子产品', '硬件设备']),
      new Product(2, '222', 2.23, 3.5, '这里是产品描述22', ['电子产品']),
      new Product(3, '333', 3.23, 1.9, '这里是产品描述33', ['电子产品', '硬件设备']),
      new Product(4, '444', 4.23, 5.0, '这里是产品描述44', ['电子产品', '硬件设备']),
      new Product(5, '555', 5.23, 4.2, '这里是产品描述55', ['电子产品', '硬件设备'])
    ];
  }

}

// 1首先定义一个对象
export class Product {
  constructor(
    // 2.申明对象的属性
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}
