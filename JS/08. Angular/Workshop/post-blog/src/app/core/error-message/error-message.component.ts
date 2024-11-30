import { Component, OnInit } from '@angular/core';
import { ErrorMessageService } from './error-message.service';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css'
})
export class ErrorMessageComponent implements OnInit {
  errorMsg = '';
  constructor(private errorMsgService: ErrorMessageService) { }

  ngOnInit(): void {
    this.errorMsgService.apiError$.subscribe((err: any) => {
      this.errorMsg = err?.message;
    });
  }
}
