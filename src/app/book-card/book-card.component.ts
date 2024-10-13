import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  // For strict mode compatibility
  // @Input() content!: Book;
  @Input() content: Book = { title: '', author: '', abstract: '' }

  customStyle = {
    color: 'red'
  };

  handleDetailClick(click: MouseEvent){
    click.preventDefault();

    console.log('Click Details-Link:', click);
  }
}
