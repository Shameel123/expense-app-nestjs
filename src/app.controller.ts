import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  getReportById(@Param('type') type: string, @Param('id') id: string): any {
    const reportType =
      type === 'income' ? REPORT_TYPE.INCOME : REPORT_TYPE.EXPENSE;
    return {
      report: data.report.filter(
        (el) => el.type === reportType && el.id === id,
      )[0],
    };
  }

  @Post()
  createReport(@Body() body: { amount: number; source: string; type: string }) {
    const reportType =
      body.type === 'income' ? REPORT_TYPE.INCOME : REPORT_TYPE.EXPENSE;
    const newReport = {
      id: (data.report.length + 1).toString(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType,
    };
    data.report.push(newReport);
    return newReport;
  }

  @Put(':id')
  updateReport(
    @Body() body: { amount: number; source: string },
    @Param('id') id: string,
  ) {
    console.log(id);
    data.report = data.report.map((el) =>
      el.id === id
        ? {
            ...el,
            amount: body.amount,
            source: body.source,
            updated_at: new Date(),
          }
        : { ...el },
    );
    return data.report.filter((el) => el.id === id)[0];
  }

  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    data.report = data.report.filter((el) => el.id !== id);
    return 'Report deleted';
  }
}
