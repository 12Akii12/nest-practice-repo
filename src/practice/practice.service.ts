import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { UpdatePracticeDto } from './dto/update-practice.dto';
import { Pract } from './entities/pract.entity';

@Injectable()
export class PracticeService {
  constructor(
    @InjectRepository(Pract)
    private readonly practiceRepository: Repository<Pract>,
  ) {}

  findAll() {
    return this.practiceRepository.find();
  }

  async findOne(id: number) {
    const practVar = await this.practiceRepository.findBy({ id: id });
    if (!practVar) {
      throw new NotFoundException(`Practice with #${id} not found`);
    }
    return practVar;
  }

  create(createPracticeDt0: CreatePracticeDto) {
    const practice = this.practiceRepository.create(createPracticeDt0);
    return this.practiceRepository.save(practice);
  }

  async update(id: string, updatePracticeDt0: UpdatePracticeDto) {
    const practice = await this.practiceRepository.preload({
      id: +id,
      ...updatePracticeDt0,
    });
    if (!practice) {
      throw new NotFoundException(`practice #${id} not found`);
    }
    return this.practiceRepository.save(practice);
  }

  async remove(id: number) {
    const practiceID: any = await this.practiceRepository.findBy({ id: id });
    return this.practiceRepository.remove(practiceID);
  }
}
