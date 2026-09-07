import { Injectable } from '@nestjs/common';

@Injectable()
export class ScoringService {
  score(input: {
    reachDropPercent: number;
    engagementChangePercent: number;
    followerChangePercent: number;
    signalCount: number;
  }) {
    const reachPenalty = Math.max(0, Math.min(60, Math.abs(input.reachDropPercent) * 1.1));
    const engagementPenalty = Math.max(0, Math.min(20, Math.abs(input.engagementChangePercent) * 2));
    const followerPenalty = Math.max(0, Math.min(15, Math.abs(input.followerChangePercent) * 0.6));
    const signalPenalty = Math.min(15, input.signalCount * 5);

    const risk = 100 - (reachPenalty + engagementPenalty + followerPenalty + signalPenalty);
    return Math.max(0, Math.min(100, Math.round(risk)));
  }
}
