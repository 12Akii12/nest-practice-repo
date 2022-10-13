import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pract } from './entities/pract.entity';
import { PracticeController } from './practice.controller';
import { PracticeService } from './practice.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pract])],
  controllers: [PracticeController],
  providers: [PracticeService],
})
export class PracticeModule {}
