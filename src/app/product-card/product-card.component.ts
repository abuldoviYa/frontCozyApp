import { Component } from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  images: any[] = [
    { id: 0, link: "assets/product/90215965.png"},
    { id: 1, link: "assets/product/90215943-02.png"},
    { id: 2, link: "assets/product/90215954.png"}
  ]

  subCategories: any[] = [
    { title: "скатерти прямоугольные, квадратные", link: "#"},
    { title: "скатерти круглые", link: "#"},
    { title: "скатерти овальные", link: "#"},
    { title: "скатерти раннеры", link: "#"},
    { title: "напероны", link: "#"},
    { title: "фуршетные юбки", link: "#"},
    { title: "мулетоны", link: "#"},
  ]


  colors: any[] = [
    {title: 'black', titleRu: 'Чёрный', link: 'assets/colors/black.png'},
    {title: 'white', titleRu: 'Белый',  link: 'assets/colors/white.png'},
    {title: 'red', titleRu: 'Красный',  link: 'assets/colors/red.png'},
    {title: 'yellow', titleRu: 'Желтый',  link: 'assets/colors/yellow.png'},
    {title: 'blue', titleRu: 'Голубой',  link: 'assets/colors/blue.png'},
    {title: 'green', titleRu: 'Зеленый',  link: 'assets/colors/green.png'},
    {title: 'dark-blue', titleRu: 'Темно-синий',  link: 'assets/colors/dark-blue.png'},
    {title: 'pink', titleRu: 'Розовый',  link: 'assets/colors/pink.png'},
  ]

  materials: any[] = [
    { title: "габардин"},
    { title: "жаккард"},
    { title: "ричард"},

  ]



  currentMaterial = this.materials[0]

  onCurrentMaterial(material: any){
    this.currentMaterial = material
  }


  sizes: any[] = [
    { title: "прямоугольная 150х70х75см"},
    { title: "круглая d 180см"},
    { title: "индивидуальный размер"},
  ]

  currentSize = this.sizes[0]

  onCurrentSize(size: any){
    this.currentSize = size
  }

  types: any[] = [
    { title: "на липучках"},
    { title: "мулетон с пришитой юбкой"},
    { title: "основа из ткани с пришитой юбкой"},
  ]

  currentType = this.types[0]

  onCurrentType(type: any){
    this.currentType = type
  }

  fullColors: boolean = false;

  onFullColors(): void {
    this.fullColors = true;
}
  getColors(full: boolean): any[] {

    if (this.colors.length >= 8 && !full) {
      let finalColors: any[] = this.colors.slice(0, 7)
      finalColors.push({title: 'none', number: this.colors.length-7})
      return finalColors;
    }
    return this.colors
  }


  currentColor: any = this.colors[0]

  onCurrentColor(color: any):void {
    this.currentColor = color
  }

  currentImage = this.images[0].link;
  onChangeImage(image: number): void {
      this.currentImage = this.images.at(image).link
  }



  protected readonly faStar = faStar;
}
