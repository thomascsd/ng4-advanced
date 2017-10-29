import { Component, OnInit } from '@angular/core';
import { initDashboard } from './init';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(initDashboard);
  }

  goCard(type: string) {
    // this.router.navigateByUrl('/cards/' + type);
    this.router.navigate(['cards', type]);
  }

}
