import { Component } from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
ToggleForm() {
throw new Error('Method not implemented.');
}
  Posts:Post [] = [
    {
      Title: "Surive",
      Thought: "Finish Coding School"
    }
  ];

  Hide: boolean = false;

  // AddPost Method
  AddPost(newPost:Post){
    this.Posts.push(newPost);
  }

  TogglePost():void{
    this.Hide = !this.Hide;
  }

  // RemovePost(Post: Post):void{
  //   this.Posts.splice(1);
  // }

}
