import { Exclude, Expose } from 'class-transformer';
import { ReportType } from '../../data';

export class ResponseReportDto {
  id: string;

  source: string;

  amount: number;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  type: ReportType;

  @Expose({ name: 'created_at' })
  transformCreatedAt() {
    return this.createdAt;
  }

  constructor(partial: Partial<ResponseReportDto>) {
    Object.assign(this, partial);
  }
}
