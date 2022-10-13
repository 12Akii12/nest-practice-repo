import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { UpdatePracticeDto } from './dto/update-practice.dto';
import { PracticeService } from './practice.service';

@Controller('practice')
export class PracticeController {
  constructor(private readonly practiceService: PracticeService) {}

  @Get()
  findAll(@Query() paginationQueryParam: any) {
    return this.practiceService.findAll();
  }
  @Get(':id')
  findByID(@Param('id') id: any) {
    console.log(typeof id);
    return this.practiceService.findOne(id);
  }

  @Post()
  create(@Body() createPracticeDto: CreatePracticeDto) {
    console.log(createPracticeDto instanceof CreatePracticeDto);
    return this.practiceService.create(createPracticeDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePracticeDto: UpdatePracticeDto,
  ) {
    return this.practiceService.update(id, updatePracticeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practiceService.remove(+id);
  }
}
