import {
  IsNumber,
  IsString,
  IsPositive,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

import { Exclude, Expose } from 'class-transformer';
import { REPORT_TYPE } from 'src/data';

export class CreateReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}

export class UpdateReportDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}

export class ReportResponseDTO {
  id: string;
  source: string;
  amount: number;

  @Exclude()
  created_at: Date;
  updated_at: Date;
  type: REPORT_TYPE;

  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return this.created_at.toISOString().split('T')[0];
    // return this.created_at;
  }

  constructor(partial: Partial<ReportResponseDTO>) {
    Object.assign(this, partial);
  }
}
