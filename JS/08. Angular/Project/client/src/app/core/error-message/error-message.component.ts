import { Component, OnInit, signal } from '@angular/core';
import { ErrorMessageService } from './error-message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css'
})
export class ErrorMessageComponent implements OnInit {
  errorMsg = signal('');
  constructor(private errorMsgService: ErrorMessageService) { }

  ngOnInit(): void {
    this.errorMsgService.apiError$.subscribe((err: any) => {
      this.errorMsg.set(err?.message);
    });
  }
}
