import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  book: Book = {
    title: "Moby Dick",
    author: "Herman Melville",
    abstract: `Moby Dick, novel by Herman Melville, published in London in October 1851 
    as The Whale and a month later in New York City as Moby- Dick; or, The Whale.`
  }

  goToBookDetails(book: Book){
    console.log('Navigate to book details, soon...');
    console.table(book);
  }
}
