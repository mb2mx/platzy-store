import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzy-store';
  items : string [] =[ 'nicolas', 'pepito'];
  icons = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  constructor() { }

  ngOnInit(): void {
  }

  add(): void{
    this.items.push('nuevo item')
  }

  delete(index: number): void{
    this.items.splice(index,1);
  }
  
}
