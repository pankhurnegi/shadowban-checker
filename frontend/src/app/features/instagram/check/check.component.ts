import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="min-h-screen bg-slate-100 px-6 py-14 text-slate-900">
      <div class="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <div class="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Checking</div>
        <h2 class="text-3xl font-bold">Checking @{{ username }}...</h2>

        <div class="mt-8 space-y-4">
          <div class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
            Connect your Instagram account to access your performance insights.
          </div>

          <button
            type="button"
            class="w-full rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-700"
            (click)="connect()"
          >
            Connect Instagram
          </button>
        </div>
      </div>
    </main>
  `,
})
export class CheckComponent implements OnInit {
  username = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.queryParamMap.get('username') ?? 'creator';
  }

  connect(): void {
    this.router.navigate(['/result'], { queryParams: { demo: 'true' } });
  }
}
