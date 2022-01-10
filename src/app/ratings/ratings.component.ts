import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
ratings:any=0
  constructor() { }

  ngOnInit(): void {

  }
upvote(){this.ratings=this.ratings+1}
  
downvote(){this.ratings=this.ratings-1}
}

