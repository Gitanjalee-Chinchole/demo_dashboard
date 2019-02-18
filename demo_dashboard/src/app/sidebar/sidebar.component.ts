import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
}
