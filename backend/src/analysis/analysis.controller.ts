import { Body, Controller, Post } from '@nestjs/common';
import { IsString } from 'class-validator';
import { AnalysisService } from './analysis.service';

class RunAnalysisDto {
  @IsString()
  instagramAccountId!: string;
}

@Controller('analysis')
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  @Post('run')
  run(@Body() body: RunAnalysisDto) {
    return this.analysisService.run(body.instagramAccountId);
  }
}
