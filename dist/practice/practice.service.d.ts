import { Repository } from 'typeorm';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { UpdatePracticeDto } from './dto/update-practice.dto';
import { Pract } from './entities/pract.entity';
export declare class PracticeService {
    private readonly practiceRepository;
    constructor(practiceRepository: Repository<Pract>);
    findAll(): Promise<Pract[]>;
    findOne(id: number): Promise<Pract[]>;
    create(createPracticeDt0: CreatePracticeDto): Promise<Pract>;
    update(id: string, updatePracticeDt0: UpdatePracticeDto): Promise<Pract>;
    remove(id: number): Promise<Pract[]>;
}
