import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {



  constructor(private router:Router){

  }

  gotoProducts(){
    console.log("Finding the best product for you")

    setTimeout(() => {
      this.router.navigate(["hooks"]);
    }, 1000);
  }

}
