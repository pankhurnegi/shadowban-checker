import { Injectable } from '@nestjs/common';

@Injectable()
export class BaselineService {
  calculateBaseline(input: {
    currentReach: number;
    baselineReach: number;
    accountMetricHistory: Array<{ reach?: number | null; followers?: number | null; impressions?: number | null; profileViews?: number | null; accountsEngaged?: number | null; capturedAt: Date }>;
  }) {
    const reachableValues = input.accountMetricHistory
      .map((entry) => entry.reach)
      .filter((value): value is number => typeof value === 'number' && Number.isFinite(value));

    if (reachableValues.length === 0) {
      return { status: 'INSUFFICIENT_DATA', average: null, median: null, recentAverage: null, changePercent: 0 };
    }

    const average = reachableValues.reduce((sum, value) => sum + value, 0) / reachableValues.length;
    const sorted = [...reachableValues].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)] ?? sorted[0];
    const recentAverage = reachableValues[reachableValues.length - 1] ?? average;
    const changePercent = ((input.currentReach - recentAverage) / recentAverage) * 100;

    return {
      status: 'OK',
      average,
      median,
      recentAverage,
      changePercent,
      baselineReach: input.baselineReach,
    };
  }
}
