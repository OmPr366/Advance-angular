import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  isChild =  false;

  constructor(){
    console.log("Constructor is called ")
  }

  ngOnInit(){
    console.log('Parent OnInit is Called')

  }

  toggleChild(){
    this.isChild =  !this.isChild
  }

}
