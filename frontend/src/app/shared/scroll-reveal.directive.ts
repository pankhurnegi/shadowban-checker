import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
  host: { class: 'scroll-reveal' },
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input('appScrollReveal') delay: number | string = 0;

  private observer?: IntersectionObserver;

  constructor(private readonly element: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.element.nativeElement.style.setProperty('--reveal-delay', `${Number(this.delay) || 0}ms`);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      this.reveal();
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        this.reveal();
        this.observer?.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private reveal(): void {
    this.element.nativeElement.classList.add('is-revealed');
  }
}
