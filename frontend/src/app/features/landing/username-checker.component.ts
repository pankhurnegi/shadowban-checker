import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface UsernameCheckResponse {
  valid: boolean;
  username?: string;
  message: string;
}

@Component({
  selector: 'app-username-checker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="checker" [class.checker--compact]="compact()" aria-labelledby="checker-title">
      @if (!compact()) {
        <div class="checker__eyebrow">Visibility check</div>
        <h2 id="checker-title">Check your Instagram account</h2>
        <p>Enter your Instagram username to get started.</p>
      }
      <form (ngSubmit)="submit()" novalidate>
        <label class="sr-only" [for]="inputId()">Instagram username</label>
        <div class="checker__form">
          <div class="username-input" [class.has-error]="showError()">
            <span aria-hidden="true">@</span>
            <input [id]="inputId()" type="text" autocomplete="off" autocapitalize="none"
              spellcheck="false" placeholder="yourusername" [formControl]="username"
              aria-describedby="username-help" />
          </div>
          <button class="primary-button" type="submit" [disabled]="isLoading()">
            @if (isLoading()) { Checking account… } @else { {{ buttonText() }} }
            @if (!isLoading()) { <span aria-hidden="true">→</span> }
          </button>
        </div>
        <p class="form-error" role="alert" [class.visible]="showError()">{{ errorMessage() }}</p>
        @if (!compact()) {
          <p id="username-help" class="checker__hint">Free to check <span>•</span> No password required</p>
        }
      </form>
      @if (isLoading()) {
        <p class="loading-status" role="status"><i></i> Checking available account data</p>
      }
    </section>
  `,
  styles: [`
    :host { display:block; } .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
    .checker{border:1px solid #e8e7e8;border-radius:24px;background:#fff;padding:30px;box-shadow:0 18px 50px rgba(31,25,39,.08);text-align:left}
    .checker__eyebrow{color:#a02d61;font-size:11px;font-weight:750;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px}.checker h2{font-size:24px;letter-spacing:-.035em;line-height:1.15;margin:0;color:#1b1a1d}.checker>p{color:#68636b;margin:8px 0 22px;font-size:15px}
    .checker__form{display:flex;gap:10px}.username-input{display:flex;align-items:center;min-width:0;flex:1;border:1px solid #d8d4d8;border-radius:13px;background:#fff;transition:border-color .2s,box-shadow .2s}.username-input:focus-within{border-color:#ae3f75;box-shadow:0 0 0 4px rgba(174,63,117,.12)}.username-input.has-error{border-color:#bd3a3a}.username-input span{padding-left:16px;color:#98929a;font-size:18px}.username-input input{min-width:0;width:100%;border:0;outline:0;padding:14px 14px 14px 5px;border-radius:13px;color:#29252a;background:transparent;font-size:16px}.username-input input::placeholder{color:#aaa5ac}
    .primary-button{border:0;border-radius:13px;padding:0 19px;white-space:nowrap;cursor:pointer;color:#fff;background:linear-gradient(115deg,#c33d72,#7b3bd1);font-size:15px;font-weight:700;transition:transform .2s,box-shadow .2s;box-shadow:0 7px 17px rgba(138,55,147,.23)}.primary-button:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 10px 22px rgba(138,55,147,.3)}.primary-button:focus-visible{outline:3px solid #eea8c9;outline-offset:3px}.primary-button:disabled{opacity:.7;cursor:wait}.primary-button span{margin-left:8px;font-size:18px}.checker__hint{text-align:center;color:#868089!important;font-size:12px!important;margin:15px 0 0!important}.checker__hint span{margin:0 5px;color:#c0bbc1}.form-error{min-height:0;color:#bd3a3a!important;font-size:13px!important;margin:0!important;display:none}.form-error.visible{display:block;margin-top:9px!important}.loading-status{font-size:12px!important;color:#736d75!important;margin:14px 0 0!important}.loading-status i{display:inline-block;width:8px;height:8px;border-radius:50%;background:#9e3970;margin-right:7px;animation:pulse 1.2s infinite}@keyframes pulse{50%{opacity:.25;transform:scale(.65)}}
    .checker--compact{background:transparent;border:0;box-shadow:none;padding:0}.checker--compact .checker__form{max-width:650px;margin:auto}.checker--compact .username-input{background:#fff}.checker--compact .primary-button{padding:0 23px}
    @media(max-width:580px){.checker{padding:22px;border-radius:19px}.checker__form{flex-direction:column}.username-input{min-height:54px}.primary-button{height:53px}.checker--compact .checker__form{flex-direction:column}.checker--compact .primary-button{height:54px}}
  `],
})
export class UsernameCheckerComponent {
  compact = input(false);
  inputId = input('instagram-username');
  buttonText = input('Check Account');
  username = new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^@?[a-zA-Z0-9._]{1,30}$/)] });
  isLoading = signal(false);
  attempted = signal(false);
  backendError = signal('');
  showError = computed(() => this.attempted() && (this.username.invalid || !!this.backendError()));
  errorMessage = computed(() => this.backendError() || 'Enter a valid Instagram username (up to 30 letters, numbers, dots, or underscores).');

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  submit(): void {
    this.attempted.set(true);
    this.backendError.set('');
    const normalized = this.username.value.trim().replace(/^@/, '').toLowerCase();
    if (!normalized || this.username.invalid) return;
    this.isLoading.set(true);
    this.http.post<UsernameCheckResponse>('/api/instagram/check', { username: normalized }).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        if (!response.valid) { this.backendError.set(response.message); return; }
        this.router.navigate(['/check'], { queryParams: { username: response.username ?? normalized } });
      },
      error: () => {
        this.isLoading.set(false);
        this.backendError.set('We could not reach the visibility service. Please try again in a moment.');
      },
    });
  }
}
