import { Injectable } from '@nestjs/common';

@Injectable()
export class AnomalyService {
  detect(input: {
    currentReach: number;
    baselineReach: number;
    engagementRate: number;
    historicalEngagementRate: number;
    followerCount: number;
    historicalFollowers: number;
  }) {
    const reachDropPercent = ((input.currentReach - input.baselineReach) / input.baselineReach) * 100;
    const engagementChangePercent = ((input.engagementRate - input.historicalEngagementRate) / input.historicalEngagementRate) * 100;
    const followerChangePercent = ((input.followerCount - input.historicalFollowers) / input.historicalFollowers) * 100;

    const signals: Array<{ type: string; changePercent: number; severity: string }> = [];

    if (reachDropPercent <= -20) {
      signals.push({ type: 'REACH_DROP', changePercent: Number(reachDropPercent.toFixed(1)), severity: reachDropPercent <= -50 ? 'HIGH' : 'MEDIUM' });
    }

    if (Math.abs(engagementChangePercent) > 10) {
      signals.push({ type: 'ENGAGEMENT_ANOMALY', changePercent: Number(engagementChangePercent.toFixed(1)), severity: 'MEDIUM' });
    }

    if (Math.abs(followerChangePercent) > 5) {
      signals.push({ type: 'FOLLOWER_TREND', changePercent: Number(followerChangePercent.toFixed(1)), severity: 'NORMAL' });
    }

    if (signals.length === 0) {
      signals.push({ type: 'ENGAGEMENT_STABLE', changePercent: Number(engagementChangePercent.toFixed(1)), severity: 'NORMAL' });
    }

    return signals;
  }
}
