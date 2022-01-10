import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
authorName:string =""
userName:string =""
quotes:string =""
quoteArray:any =[]

  constructor() { }

  ngOnInit(): void {
  }
  getData(forms:NgForm){
    if(this.authorName === "" || this.userName ==="" || this.quotes ===""){
      
    } else{
      this.quoteArray.push({name:this.userName,author:this.authorName,quotes:this.quotes})
      forms.reset()
    }

  }
    
  }


