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
import { Data, data, REPORT_TYPE } from './data';
import { AppService } from './app.service';
import { CreateReportDto, UpdateReportDto } from './dtos/report.dto';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: string,
  ): Data {
    const reportType =
      type === 'income' ? REPORT_TYPE.INCOME : REPORT_TYPE.EXPENSE;
    return this.appService.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: string,
    @Param('id') id: string,
  ): any {
    const reportType =
      type === 'income' ? REPORT_TYPE.INCOME : REPORT_TYPE.EXPENSE;
    return this.appService.getReportById(reportType, id);
  }

  @Post()
  createReport(@Body() body: CreateReportDto) {
    return this.appService.createReport(body);
  }

  @Put(':id')
  updateReport(@Body() body: UpdateReportDto, @Param('id') id: string) {
    return this.appService.updateReport(body, id);
  }

  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.appService.deleteReport(id);
  }
}
