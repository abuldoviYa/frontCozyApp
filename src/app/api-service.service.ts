import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  getFullMenu() {
    return [
      {name: "Каталог", link: "#"},
      {name: "Столовый текстиль", link: "#"},
      {name: "Для мероприятий и ресторанов", link: "#"},
      {name: "Чехлы", link: "#"},
      {name: "Постельное бельё", link: "#"},
      {name: "Шатры и тенты", link: "#"},
      {name: "Аксессуары", link: "#"},
    ]
  }


}
