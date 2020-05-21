import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit {
  sidebar = true;
  constructor() {}

  ngOnInit(): void {}
  sidebarOpen() {
    this.sidebar = !this.sidebar;
  }
}
