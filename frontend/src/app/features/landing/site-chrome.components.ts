import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-navbar', standalone: true, imports: [RouterLink, ScrollRevealDirective],
  template: `
    <header class="nav-wrap" appScrollReveal><nav class="nav" aria-label="Main navigation">
      <a class="brand" routerLink="/" aria-label="VisibilityCheck home"><span class="brand-mark" aria-hidden="true">◒</span>VisibilityCheck</a>
      <button class="menu-button" type="button" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-controls="navigation-links" aria-label="Toggle navigation"><span></span><span></span></button>
      <div class="nav-links" id="navigation-links" [class.is-open]="open()">
        <a href="#how-it-works" (click)="open.set(false)">How it works</a>
        <a href="#what-we-check" (click)="open.set(false)">What we check</a>
        <a href="#faq" (click)="open.set(false)">FAQ</a>
        <a href="#check" class="nav-cta" (click)="open.set(false)">Check my Instagram <span aria-hidden="true">→</span></a>
      </div>
    </nav></header>
  `,
  styles: [`
    .nav-wrap{position:relative;z-index:10;padding:20px 24px 0}.nav{max-width:1180px;margin:auto;min-height:52px;display:flex;align-items:center;justify-content:space-between}.brand{display:inline-flex;align-items:center;gap:9px;text-decoration:none;color:#211d22;font-weight:780;letter-spacing:-.04em;font-size:18px}.brand-mark{display:grid;place-items:center;width:28px;height:28px;border-radius:9px;color:#fff;background:linear-gradient(135deg,#f57258,#b23686 48%,#6d43c5);font-size:21px;line-height:1}.nav-links{display:flex;align-items:center;gap:25px}.nav-links>a{font-size:14px;font-weight:550;text-decoration:none;color:#686269;transition:color .2s}.nav-links>a:hover{color:#221e23}.nav-links .nav-cta{background:#252125;color:white;border-radius:10px;padding:10px 14px;font-weight:650}.nav-links .nav-cta:hover{color:#fff;background:#3a343b}.nav-cta span{padding-left:4px}.menu-button{display:none;border:0;background:transparent;padding:8px;gap:5px;flex-direction:column}.menu-button span{display:block;width:21px;height:2px;background:#302a31;border-radius:4px}@media(max-width:700px){.nav-wrap{padding:17px 18px 0}.menu-button{display:flex}.nav-links{display:none;position:absolute;left:16px;right:16px;top:64px;align-items:stretch;flex-direction:column;gap:0;padding:8px;background:#fff;border:1px solid #e5e1e4;border-radius:14px;box-shadow:0 16px 30px rgba(30,20,30,.12)}.nav-links.is-open{display:flex}.nav-links>a{padding:12px}.nav-links .nav-cta{text-align:center;margin:4px;background:#252125}}
  `],
})
export class NavbarComponent { open = signal(false); }

@Component({
  selector: 'app-trust-row', standalone: true,
  template: `<div class="trust" aria-label="Product assurances"><span><b aria-hidden="true">✓</b> No Instagram password required</span><span><b aria-hidden="true">✓</b> Uses official Instagram data</span><span><b aria-hidden="true">✓</b> Takes less than a minute</span></div>`,
  styles: [`.trust{display:flex;flex-wrap:wrap;justify-content:center;gap:18px 30px;color:#615b63;font-size:13px}.trust span{display:flex;align-items:center;gap:7px}.trust b{display:grid;place-items:center;width:17px;height:17px;border-radius:50%;background:#f0e7ee;color:#9f356c;font-size:11px}@media(max-width:570px){.trust{align-items:flex-start;flex-direction:column;max-width:235px;margin:auto;gap:11px}}`],
})
export class TrustRowComponent {}

@Component({
  selector: 'app-footer', standalone: true, imports: [ScrollRevealDirective],
  template: `
    <footer appScrollReveal><div class="footer-main"><a class="brand" href="#top"><span class="brand-mark" aria-hidden="true">◒</span>VisibilityCheck</a><nav aria-label="Footer links"><a href="#">Privacy</a><a href="#">Terms</a><a href="#faq">FAQ</a><a href="mailto:hello@visibilitycheck.example">Contact</a></nav></div><p>VisibilityCheck analyzes available Instagram performance signals. Results indicate potential visibility anomalies and do not constitute definitive proof of an Instagram shadowban.</p></footer>
  `,
  styles: [`footer{max-width:1180px;margin:auto;padding:36px 24px 44px;border-top:1px solid #e8e4e7}.footer-main{display:flex;justify-content:space-between;gap:22px;align-items:center}.brand{display:inline-flex;align-items:center;gap:9px;text-decoration:none;color:#211d22;font-weight:780;letter-spacing:-.04em;font-size:18px}.brand-mark{display:grid;place-items:center;width:28px;height:28px;border-radius:9px;color:#fff;background:linear-gradient(135deg,#f57258,#b23686 48%,#6d43c5);font-size:21px;line-height:1}footer nav{display:flex;gap:20px}footer nav a{color:#686269;text-decoration:none;font-size:13px}footer p{max-width:700px;color:#8a858b;font-size:12px;line-height:1.6;margin:26px 0 0}@media(max-width:600px){footer{padding:30px 20px}.footer-main{align-items:flex-start;flex-direction:column}footer nav{flex-wrap:wrap;gap:11px 18px}}`],
})
export class FooterComponent {}
