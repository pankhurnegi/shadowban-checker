import { Component } from '@angular/core';
import { DemoResultComponent, FaqAccordionComponent, HowItWorksComponent, MetricsPreviewComponent, ShadowbanExplanationComponent, SignalGridComponent, VisibilityScoreComponent } from './landing-sections.components';
import { FooterComponent, NavbarComponent, TrustRowComponent } from './site-chrome.components';
import { UsernameCheckerComponent } from './username-checker.component';
import { FinalCtaComponent } from './final-cta.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, UsernameCheckerComponent, TrustRowComponent, DemoResultComponent, HowItWorksComponent, SignalGridComponent, VisibilityScoreComponent, MetricsPreviewComponent, ShadowbanExplanationComponent, FaqAccordionComponent, FinalCtaComponent, FooterComponent, ScrollRevealDirective],
  template: `
    <div id="top" class="page-shell">
      <app-navbar />
      <main>
        <section class="hero" id="check" aria-labelledby="hero-title" appScrollReveal>
          <div class="hero-glow hero-glow--one"></div><div class="hero-glow hero-glow--two"></div>
          <div class="hero-content">
            <div class="free-badge"><span></span> Free Instagram visibility check</div>
            <h1 id="hero-title">Is Instagram hiding your reach?</h1>
            <p class="hero-copy">Check your Instagram visibility and find unusual drops in reach, engagement, and content discovery.</p>
            <app-username-checker inputId="hero-username" buttonText="Check Account" />
            <app-trust-row />
          </div>
        </section>
        <app-demo-result appScrollReveal />
        <app-how-it-works appScrollReveal />
        <app-signal-grid appScrollReveal />
        <app-visibility-score appScrollReveal />
        <app-metrics-preview appScrollReveal />
        <app-shadowban-explanation appScrollReveal />
        <app-faq-accordion appScrollReveal />
        <app-final-cta appScrollReveal />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    :host{display:block}.page-shell{overflow:hidden;background:#fcfcfb}.hero{position:relative;padding:110px 24px 83px;isolation:isolate}.hero-content{position:relative;z-index:1;margin:auto;max-width:790px;text-align:center}.hero-glow{position:absolute;z-index:-1;filter:blur(1px);border-radius:50%;pointer-events:none}.hero-glow--one{width:500px;height:350px;top:-160px;left:calc(50% - 460px);background:radial-gradient(circle,rgba(249,191,204,.31),rgba(249,191,204,0) 70%)}.hero-glow--two{width:480px;height:390px;top:-100px;right:calc(50% - 480px);background:radial-gradient(circle,rgba(199,181,247,.29),rgba(199,181,247,0) 70%)}.free-badge{display:inline-flex;align-items:center;gap:7px;border:1px solid #eadde5;border-radius:99px;background:rgba(255,255,255,.66);padding:7px 11px;color:#92345f;font-size:10px;font-weight:780;letter-spacing:.11em;text-transform:uppercase}.free-badge span{width:6px;height:6px;border-radius:50%;background:#bc3d72}.hero h1{max-width:760px;margin:20px auto 17px;color:#221e23;font-size:clamp(48px,7vw,78px);font-weight:790;line-height:.98;letter-spacing:-.07em}.hero-copy{max-width:660px;margin:0 auto 35px;color:#6e6870;font-size:clamp(17px,2.2vw,20px);line-height:1.55}.hero app-username-checker{display:block;max-width:610px;margin:0 auto 23px}@media(max-width:600px){.hero{padding:76px 18px 62px}.hero h1{font-size:48px}.hero-copy{font-size:17px;margin-bottom:28px}}
  `],
})
export class LandingPageComponent {}
