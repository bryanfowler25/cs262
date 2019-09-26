import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public val1: string;
  public val2: string;
  public op: string;
  constructor() {}
  calculate() {
    const a = +this.val1;
    const b = +this.val2;

    
  }

}
