import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Data, data, REPORT_TYPE } from './data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string): Data {
    const reportType =
      type === 'income' ? REPORT_TYPE.INCOME : REPORT_TYPE.EXPENSE;
    return { report: data.report.filter((el) => el.type === reportType) };
  }

  @Get(':id')
  getReportById(): any {
    return 'Report by id';
  }

  @Post()
  createReport() {
    return 'Report created';
  }

  @Put(':id')
  updateReport() {
    return 'Report updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'Report deleted';
  }
}
