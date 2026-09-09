import { Component } from '@angular/core';
import { UsernameCheckerComponent } from './username-checker.component';

@Component({
  selector: 'app-final-cta', standalone: true, imports: [UsernameCheckerComponent],
  template: `<section class="final-cta" aria-labelledby="cta-title"><div><span class="free-badge"><span></span> Free visibility analysis</span><h2 id="cta-title">Find out what’s happening to your Instagram reach.</h2><p>Check your account and see whether your recent performance looks normal.</p><app-username-checker [compact]="true" inputId="footer-username" buttonText="Check My Instagram" /></div></section>`,
  styles: [`.final-cta{padding:104px 24px;background:#262229;text-align:center;color:#fff}.final-cta>div{max-width:720px;margin:auto}.free-badge{display:inline-flex;align-items:center;gap:7px;border:1px solid #574653;border-radius:99px;background:rgba(255,255,255,.04);padding:7px 11px;color:#d991b1;font-size:10px;font-weight:780;letter-spacing:.11em;text-transform:uppercase}.free-badge span{width:6px;height:6px;border-radius:50%;background:#db6698}.final-cta h2{font-size:clamp(31px,5vw,53px);letter-spacing:-.06em;line-height:1.04;max-width:680px;margin:19px auto 14px}.final-cta>div>p{margin:0 auto 28px;color:#c7bec6;line-height:1.55;font-size:17px}.final-cta app-username-checker{display:block;max-width:650px;margin:auto}@media(max-width:600px){.final-cta{padding:75px 18px}.final-cta h2{font-size:34px}}`],
})
export class FinalCtaComponent {}
