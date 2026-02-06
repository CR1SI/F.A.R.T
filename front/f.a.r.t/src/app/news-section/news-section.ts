import { Component } from '@angular/core';

@Component({
  selector: 'app-news-section',
  imports: [],
  templateUrl: './news-section.html',
  styleUrl: './news-section.css',
})
export class NewsSection {
  
  public topArticles: Article[] = [ //will be calling an API here and getting the json with the 4 entries
    {title: "Title1", description: "here it goes!", imgUrl: "assets/testArt/test.jpg"}, 
    {title: "Title2", description: "here it goes!", imgUrl: "assets/testArt/test.jpg"}, 
    {title: "Title3", description: "here it goes!", imgUrl: "assets/testArt/test.jpg"}, 
    {title: "Title4", description: "here it goes!", imgUrl: "assets/testArt/test.jpg"}, 
    {title: "Title5", description: "here it goes!", imgUrl: "assets/testArt/test.jpg"}, 
    {title: "Title6", description: "here it goes!", imgUrl: "assets/testArt/test.jpg"}
  ];
  
}

type Article = {
  title: string,
  description: string,
  imgUrl: string
}
