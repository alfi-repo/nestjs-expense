import { Injectable } from '@nestjs/common';
import { data, ReportType } from '../data';
import { v4 as uuid } from 'uuid';
import { CreateReportDto, ResponseReportDto, UpdateReportDto } from './dto';

@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ResponseReportDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new ResponseReportDto(report));
  }

  getReportById(type: ReportType, id: string): ResponseReportDto {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!report) return;

    return new ResponseReportDto(report);
  }

  createReport(type: ReportType, dto: CreateReportDto): ResponseReportDto {
    const newReport = {
      id: uuid(),
      source: dto.source,
      amount: dto.amount,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: type,
    };
    data.report.push(newReport);
    return new ResponseReportDto(newReport);
  }

  updateReport(
    type: ReportType,
    id: string,
    dto: UpdateReportDto,
  ): ResponseReportDto {
    // const reportToUpdate = data.report
    //   .filter((report) => report.type === type)
    //   .find((report) => report.id === id);

    const reportToUpdate = this.getReportById(type, id);

    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...dto,
      updatedAt: new Date(),
    };

    return new ResponseReportDto(data.report[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1);

    return;
  }
}
