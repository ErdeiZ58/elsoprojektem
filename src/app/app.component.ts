import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BEGZ';
  korte = 5;
  tomb = [1, 2, 3, 4, 5, 6, 7];



  constructor() {
    console.log(this.tomb.filter((param: number) => param > 4    ));
    console.log(this.tomb.reduce((x, y) => x + y));
    let alma = this.tomb.filter((param: number) => param > 4    );
    const korte = this.tomb.filter((param: number) => param > 4    );
    console.log(alma);
    console.log(korte);
    console.log(korte);
  }
}
