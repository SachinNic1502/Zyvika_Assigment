import { Component, ElementRef, Input,Renderer2  } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input() data: any;
  private contentElement: HTMLElement | null = null;

  constructor( private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.contentElement = this.el.nativeElement.querySelector('#preview');
    if (!this.contentElement) {
      console.error('Preview content element not found.');
    }
  }

  generatePDF(): void {
    if (this.contentElement) {
      html2canvas(this.contentElement, { scale: 3 }).then((canvas) => {
        const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
        const fileWidth = 200;
        const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
        const PDF = new jsPDF('p', 'mm', 'a4');
        PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight);
        PDF.save(`${this.data.companyname}_VisitingCard.pdf` );
        alert('PDF Downloaded!');
      });
    }
  }
}
