import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from "@angular/core";

type MyVoid = () => void;

@Directive({
    selector: '[appHighlight]',
    standalone: true,
})
export class HighlightDirective implements OnInit, OnDestroy {
    // @HostListener('mouseenter', ['$event']) anotherMouseEnterHandler(e: MouseEvent) {
    //     console.log('anotherMouseEnter', e);
    // }

    // @HostListener('mouseleave', ['$event']) anotherMouseLeaveHandler(e: MouseEvent) {
    //     console.log('anotherMouseLeave', e);
    // }

    @HostListener('mousedown', ['$event']) mouseDownHandler(e: MouseEvent) {
        console.log('MouseDown Activated', e);
    } // can be used instead of below event handlers but clears itself, no need to be put in onDestroy

    // unsubEventArray: (() => void)[] = [];
    unsubEventArray: MyVoid[] = [];

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        //!Important: Bad practice
        // this.elRef.nativeElement.style.background = 'orange';

        //Good practice
        // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');

        const mouseEnterEvent = this.renderer.listen(
            this.elRef.nativeElement,
            'mouseenter',
            this.mousEnterHandler.bind(this));

        const mouseLeaveEvent = this.renderer.listen(
            this.elRef.nativeElement,
            'mouseleave',
            this.mouseLeaveHandler.bind(this));

        this.unsubEventArray.push(mouseEnterEvent);
        this.unsubEventArray.push(mouseLeaveEvent);
    }


    mousEnterHandler(e: MouseEvent) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'orange');
        this.renderer.addClass(this.elRef.nativeElement, 'highlight');
    }

    mouseLeaveHandler(e: MouseEvent) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'initial');
        this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
    }

    ngOnDestroy(): void {
        console.log('onDestroy invoked!', this.unsubEventArray);
        this.unsubEventArray.forEach(eventFn => eventFn());

    }
}