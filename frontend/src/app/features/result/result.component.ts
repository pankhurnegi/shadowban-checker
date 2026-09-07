import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div class="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-10">
        <div class="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Instagram Visibility Analysis</div>
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div class="text-5xl font-black">62<span class="text-2xl font-medium text-slate-500"> / 100</span></div>
            <div class="mt-3 text-2xl font-bold text-orange-600">POSSIBLE VISIBILITY ISSUE</div>
            <div class="mt-2 text-lg text-slate-600">82% confidence</div>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <div class="font-semibold text-slate-800">DEMO DATA</div>
            <div>Visible demo results only</div>
          </div>
        </div>

        <section class="mt-8 grid gap-4 md:grid-cols-4">
          <div class="rounded-2xl bg-slate-50 p-4">
            <div class="text-sm text-slate-500">Reach</div>
            <div class="mt-2 text-3xl font-bold text-rose-600">↓ 47%</div>
          </div>
          <div class="rounded-2xl bg-slate-50 p-4">
            <div class="text-sm text-slate-500">Followers</div>
            <div class="mt-2 text-3xl font-bold text-emerald-600">↑ 8%</div>
          </div>
          <div class="rounded-2xl bg-slate-50 p-4">
            <div class="text-sm text-slate-500">Engagement</div>
            <div class="mt-2 text-3xl font-bold text-slate-700">↓ 3%</div>
          </div>
          <div class="rounded-2xl bg-slate-50 p-4">
            <div class="text-sm text-slate-500">Recent content</div>
            <div class="mt-2 text-xl font-bold text-orange-500">Below baseline</div>
          </div>
        </section>

        <section class="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 class="text-2xl font-bold">What we found</h3>
            <p class="mt-3 text-lg text-slate-700">
              Your recent reach is approximately 47% below your historical baseline.
            </p>

            <h4 class="mt-8 text-xl font-bold">Why this matters</h4>
            <p class="mt-3 text-slate-700">
              Your engagement has remained relatively stable, which suggests the largest change is in distribution and reach rather than audience interaction.
            </p>

            <div class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div class="mb-4 font-semibold text-slate-800">Evidence</div>
              <div class="space-y-3">
                <div class="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span>Baseline reach</span>
                  <strong>40,000</strong>
                </div>
                <div class="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span>Recent reach</span>
                  <strong>18,000</strong>
                </div>
                <div class="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span>Engagement trend</span>
                  <strong>Stable</strong>
                </div>
              </div>
            </div>

            <div class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div class="mb-4 font-semibold text-slate-800">Disclaimer</div>
              <p class="text-slate-700">
                This analysis cannot confirm whether Instagram has shadowbanned your account.
              </p>
            </div>
          </div>

          <aside class="space-y-6">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 class="text-lg font-bold">Reach trend</h4>
              <div class="mt-5 flex items-end gap-3">
                <div class="flex h-36 w-full items-end gap-2">
                  <div class="w-1/3 rounded-t-xl bg-slate-300" style="height: 52%"></div>
                  <div class="w-1/3 rounded-t-xl bg-slate-300" style="height: 69%"></div>
                  <div class="w-1/3 rounded-t-xl bg-rose-500" style="height: 35%"></div>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 class="text-lg font-bold">Best performing post</h4>
              <div class="mt-4 rounded-xl bg-white p-3">
                <div class="h-28 rounded-lg bg-gradient-to-br from-pink-300 via-orange-300 to-yellow-200"></div>
                <div class="mt-3 text-sm text-slate-600">Recent Reel with 200k views</div>
                <div class="mt-2 font-semibold">🔥 OUTLIER</div>
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 class="text-lg font-bold">Lowest performing post</h4>
              <div class="mt-4 rounded-xl bg-white p-3">
                <div class="h-28 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300"></div>
                <div class="mt-3 text-sm text-slate-600">Reach far below baseline</div>
                <div class="mt-2 font-semibold text-orange-500">⚠ BELOW BASELINE</div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  `,
})
export class ResultComponent {}
