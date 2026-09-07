import { Module } from '@nestjs/common';
import { AnalysisController } from './analysis.controller';
import { AnalysisService } from './analysis.service';
import { BaselineService } from './baseline.service';
import { AnomalyService } from './anomaly.service';
import { ScoringService } from './scoring.service';

@Module({
  controllers: [AnalysisController],
  providers: [AnalysisService, BaselineService, AnomalyService, ScoringService],
  exports: [AnalysisService],
})
export class AnalysisModule {}
