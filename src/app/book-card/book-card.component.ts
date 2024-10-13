import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() detailClick = new EventEmitter<Book>();

  customStyle = {
    color: 'red'
  };

  handleDetailClick(click: MouseEvent){
    click.preventDefault();
    this.detailClick.emit(this.content);
  }
}
