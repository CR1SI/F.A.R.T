import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  
  transform(text: string): SafeHtml {
    if (!text) return '';
    
    // Match @username (alphanumeric and underscores)
    const mentionRegex = /@(\w+)/g;
    const highlighted = text.replace(
      mentionRegex, 
      '<span class="text-pink-400">@$1</span>'
    );
    
    return highlighted;
  }

}
