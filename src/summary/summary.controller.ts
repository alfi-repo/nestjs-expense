import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summaries')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Get()
  getSummary() {
    return this.summaryService.calculateSummary();
  }
}
