import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div class="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:p-12">
        <div class="mb-8 text-sm uppercase tracking-[0.35em] text-pink-300">Instagram Visibility Checker</div>
        <h1 class="text-4xl font-bold tracking-tight md:text-6xl">Is your Instagram reach unusually low?</h1>

        <div class="mt-10 max-w-xl rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg">
          <label class="mb-3 block text-sm font-medium text-slate-200">Enter your Instagram username</label>
          <div class="flex gap-3">
            <div class="flex items-center rounded-xl border border-slate-700 bg-slate-950 px-3 text-lg text-slate-300">
              @
            </div>
            <input
              [(ngModel)]="username"
              class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-lg text-white outline-none ring-0 transition focus:border-pink-400"
              placeholder="username"
              aria-label="Instagram username"
            />
          </div>

          <button
            type="button"
            class="mt-5 w-full rounded-xl bg-pink-500 px-5 py-3 text-base font-semibold text-white transition hover:bg-pink-400"
            (click)="onSubmit()"
          >
            Check My Account
          </button>
        </div>
      </div>
    </main>
  `,
})
export class LandingComponent {
  username = '';

  constructor(private readonly router: Router) {}

  onSubmit(): void {
    const normalized = this.username.trim().replace(/^@/, '').toLowerCase();
    if (!normalized) {
      return;
    }

    this.router.navigate(['/check'], { queryParams: { username: normalized } });
  }
}
