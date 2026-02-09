import { Component, ElementRef, ViewChild} from '@angular/core';
import { SafePipe } from '../safe-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-stream',
  standalone: true,
  imports: [SafePipe, FormsModule],
  templateUrl: './live-stream.html',
  styleUrl: './live-stream.css',
})
export class LiveStream{
  @ViewChild('chatInput') chatInput!: ElementRef;

  channelId = 'UC517yYV8LOb4y9X7QuTI0Zg';
  streamUrl = `https://www.youtube.com/embed/live_stream?channel=${this.channelId}&autoplay=1`;

  messageValue: string = '';

  handleKeyInput(event: KeyboardEvent){
    if(event.key === 'Enter' && !event.shiftKey){
      event.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage(){
    if (!this.messageValue.trim()) return;

    //send message here later
    console.log('Sending:', this.messageValue);

    this.messageValue = '';
    if (this.chatInput) {
      this.chatInput.nativeElement.style.height = '52px';
    }
  }
}
