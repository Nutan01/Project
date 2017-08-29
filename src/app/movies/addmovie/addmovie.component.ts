import { Component, OnInit } from '@angular/core';
import { MovieService} from 'app/shared/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

 movieModel: any = {};


  constructor(
    private movieService:MovieService
  ) { }

  ngOnInit() {
  }

   addMovies() {
            console.log(this.movieModel);
            if(this.movieModel!=null){
               this.movieService.setBody(this.movieModel)
            this.movieService.postMovie();
           console.log(this.movieModel);}
           
    }

}
