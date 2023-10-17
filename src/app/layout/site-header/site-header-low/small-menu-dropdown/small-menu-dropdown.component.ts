import {Component, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule} from "@angular/forms";
import {ApiServiceService} from "../../../../api-service.service";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-small-menu-dropdown',
  templateUrl: './small-menu-dropdown.component.html',
  styleUrls: ['./small-menu-dropdown.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, FormsModule, NgForOf, NgIf, NgClass, NgStyle],
  animations: [
    trigger('openClose', [
      state('closed', style({
        opacity: 0,
        overflow: 'hidden',

        transform: 'translateY(-100px)'
      })),
      state('open', style({
        opacity: 1,

        transform: 'translateY(0)'
      })),
      transition('closed => open', [
        animate('1s ease-out')
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None
})
export class SmallMenuDropdownComponent {
    constructor(private apiService: ApiServiceService) {
    }

    menuItems = this.apiService.getFullMenu()

  showMenu = false
  onMenu(){
      this.showMenu = !this.showMenu
  }
}


