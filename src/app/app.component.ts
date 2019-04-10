import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  selectedItem:number =null
  itemQty=[0,0,0,0,0,0,0,0,0,0,0,0]
  IsVisible=false
  IsCartVisible=false

  showVisible(){
    this.IsVisible=! this.IsVisible
    console.log(this.IsVisible)
  }

  showCartPage(){
    this.IsVisible=false
    this.IsCartVisible=! this.IsCartVisible
  }

  ShowProducts=[
    {
      id: 0,
      price: 800,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 1,
      price: 1000,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 2,
      price: 600,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 3,
      price: 2000,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 4,
      price: 3000,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 5,
      price: 4000,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 6,
      price: 8000,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 7,
      price: 200,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 8,
      price: 800,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 9,
      price: 500,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 10,
      price: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  },
  {
      id: 11,
      price: 9999,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
  }
  ]

  selectedValue(index: number){
    this.selectedItem=index
    
    console.log(index)
    console.log(this.selectedItem)
       } 

 showSelected(index: number): string{
    if(index===this.selectedItem){
        return "#DCDCDC"
       
    }
}
  AddQuantity(index: number){
    if(this.selectedItem!==null){
    this.itemQty[index]++
  }
 }   
  MinusQuantity(index: number){
        if(this.selectedItem!==null&&this.itemQty[index] >0){
          this.itemQty[index]--
        }
        return 0
    }
    
  addToCart(){
    let productQty=this.ShowProducts[this.selectedItem]

  }
  
  removeCart(){
    this.selectedItem=null
    this.itemQty=[0,0,0,0,0,0,0,0,0,0,0,0]
  }

 }

