import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  type: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map((params) => params['type'])
      .subscribe((paramType) => this.type = paramType);
  }

  plusOne() {
    this.router.navigate(['cards', parseInt(this.type, 10) + 1], {
      queryParams: {
        name: 'thomas'
      }
    });


  }

}
