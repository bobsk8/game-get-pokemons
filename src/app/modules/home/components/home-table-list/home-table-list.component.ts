import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-table-list',
  templateUrl: './home-table-list.component.html',
  styleUrls: ['./home-table-list.component.css']
})
export class HomeTableListComponent implements OnInit {

  @Input() list = [];
  constructor() { }

  ngOnInit() {
  }

}
