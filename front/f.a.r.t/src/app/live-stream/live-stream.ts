import { Component, ElementRef, OnInit, ViewChild, NgZone, ChangeDetectorRef, Inject, PLATFORM_ID} from '@angular/core';
import { SafePipe } from '../safe-pipe';
import { FormsModule } from '@angular/forms';
import { Api } from '../api';
import Pusher from 'pusher-js';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { environment } from '../environments/environment';
import { HighlightPipe } from '../highlight-pipe';

@Component({
  selector: 'app-live-stream',
  standalone: true,
  imports: [SafePipe, FormsModule, CommonModule, HighlightPipe],
  templateUrl: './live-stream.html',
  styleUrl: './live-stream.css',
})
export class LiveStream implements OnInit{
  @ViewChild('chatInput') chatInput!: ElementRef;
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  channelId = 'UC8YY05OLnCwVro6uBkNYEUw';
  streamUrl = `https://www.youtube.com/embed/live_stream?channel=${this.channelId}&autoplay=1`;

  messageValue: string = '';
  messages: any[] = [];
  private isBrowser: boolean;

  constructor(private api: Api, private ngZone: NgZone, private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) platformId: Object){
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(){
    this.loadHistory();
    if (this.isBrowser) {
      this.pusherInit();
    }
  }

  handleKeyInput(event: KeyboardEvent){
    if(event.key === 'Enter' && !event.shiftKey){
      event.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage(){
    if (!this.messageValue.trim()) return;
    const msg = this.messageValue;

    this.messageValue = '';

    this.api.sendMessage(msg).subscribe({
      next: () => {
        this.resetInputHeight();
      },
      error: (err) => {
        console.error('Error sending message:', err);
        alert('You must be logged in to chat!');
      }
    });
  }

  loadHistory(){
    this.api.getChatHistory().subscribe({
      next: (history) => {
        this.ngZone.run(() => {
          this.messages = history;
          this.cdr.detectChanges();
          this.scrollToBottom();
        });
      },
      error: (err) => console.error('Could not load history', err)
    });
  }

  pusherInit(){
    var pusher = new Pusher(environment.pusherKey, {
      cluster: 'us2'
    });

    var channel = pusher.subscribe('fart-chat');

    channel.bind('chat-event', (data: any) => {
      this.ngZone.run(() => {
        this.messages.push(data);
        this.cdr.detectChanges();
        this.scrollToBottom();
      })
      
    });
  }

  resetInputHeight(){
    if (this.isBrowser && this.chatInput) {
      this.chatInput.nativeElement.style.height = '52px';
    }
  }

  scrollToBottom(): void {
    if (!this.isBrowser || !this.scrollContainer) return;
    window.requestAnimationFrame(() => {
      const el = this.scrollContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    });
  }

  adjustHeight(event: any) {
    if (!this.isBrowser) return;
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
