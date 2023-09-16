import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseEnumPipe,
  Post,
  Put,
} from '@nestjs/common';
import { REPORT_TYPE } from 'src/data';
import {
  CreateReportDto,
  ReportResponseDTO,
  UpdateReportDto,
} from 'src/dtos/report.dto';
import { ReportService } from './report.service';

@Controller('report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: string,
  ): ReportResponseDTO[] {
    const reportType =
      type === 'income' ? REPORT_TYPE.INCOME : REPORT_TYPE.EXPENSE;
    return this.reportService.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: string,
    @Param('id') id: string,
  ): ReportResponseDTO {
    const reportType =
      type === 'income' ? REPORT_TYPE.INCOME : REPORT_TYPE.EXPENSE;
    return this.reportService.getReportById(reportType, id);
  }

  @Post()
  createReport(@Body() body: CreateReportDto): ReportResponseDTO {
    return this.reportService.createReport(body);
  }

  @Put(':id')
  updateReport(
    @Body() body: UpdateReportDto,
    @Param('id') id: string,
  ): ReportResponseDTO {
    return this.reportService.updateReport(body, id);
  }

  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.reportService.deleteReport(id);
  }
}
