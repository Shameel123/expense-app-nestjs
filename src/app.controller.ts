import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param() params): string[] {
    console.log(params);
    return [];
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
