import { Injectable } from '@nestjs/common';
import { AnomalyService } from './anomaly.service';
import { BaselineService } from './baseline.service';
import { ScoringService } from './scoring.service';

@Injectable()
export class AnalysisService {
  constructor(
    private readonly baselineService: BaselineService,
    private readonly anomalyService: AnomalyService,
    private readonly scoringService: ScoringService,
  ) {}

  run(instagramAccountId: string) {
    const demoMetrics = {
      followers: 50000,
      currentReach: 18000,
      baselineReach: 40000,
      engagementRate: 0.031,
      historicalEngagementRate: 0.034,
      accountMetricHistory: [
        { capturedAt: new Date('2026-02-01'), followers: 48000, reach: 41000, impressions: 55000, profileViews: 1000, accountsEngaged: 1700 },
        { capturedAt: new Date('2026-02-08'), followers: 48600, reach: 43000, impressions: 56000, profileViews: 1180, accountsEngaged: 1750 },
        { capturedAt: new Date('2026-02-15'), followers: 49000, reach: 39000, impressions: 52000, profileViews: 1200, accountsEngaged: 1900 },
      ],
      recentPosts: [
        { id: 'p1', reach: 120000, views: 200000, likes: 4000, comments: 180, shares: 220, saves: 460 },
        { id: 'p2', reach: 14000, views: 18000, likes: 420, comments: 17, shares: 42, saves: 90 },
      ],
    };

    const baseline = this.baselineService.calculateBaseline({
      currentReach: demoMetrics.currentReach,
      baselineReach: demoMetrics.baselineReach,
      accountMetricHistory: demoMetrics.accountMetricHistory,
    });

    const signals = this.anomalyService.detect({
      currentReach: demoMetrics.currentReach,
      baselineReach: demoMetrics.baselineReach,
      engagementRate: demoMetrics.engagementRate,
      historicalEngagementRate: demoMetrics.historicalEngagementRate,
      followerCount: demoMetrics.followers,
      historicalFollowers: 48000,
    });

    const visibilityScore = this.scoringService.score({
      reachDropPercent: baseline.changePercent,
      engagementChangePercent: -3,
      followerChangePercent: 8,
      signalCount: signals.length,
    });

    return {
      instagramAccountId,
      visibilityScore,
      riskLevel: visibilityScore >= 80 ? 'NO_STRONG_VISIBILITY_ISSUE_DETECTED' : visibilityScore >= 60 ? 'MINOR_VISIBILITY_ANOMALY' : visibilityScore >= 40 ? 'POSSIBLE_VISIBILITY_ISSUE' : 'STRONG_VISIBILITY_ANOMALY',
      confidence: 0.82,
      signals,
      topConcern: 'Reach is significantly below baseline',
      summary: 'Your recent reach is approximately 47% below your historical baseline.',
    };
  }
}
