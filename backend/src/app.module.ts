import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health.controller';
import { AnalysisModule } from './analysis/analysis.module';
import { InstagramModule } from './instagram/instagram.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    InstagramModule,
    AnalysisModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
