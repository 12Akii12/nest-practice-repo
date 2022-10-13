import { CreatePracticeDto } from './dto/create-practice.dto';
import { UpdatePracticeDto } from './dto/update-practice.dto';
import { PracticeService } from './practice.service';
export declare class PracticeController {
    private readonly practiceService;
    constructor(practiceService: PracticeService);
    findAll(paginationQueryParam: any): Promise<import("./entities/pract.entity").Pract[]>;
    findByID(id: any): Promise<import("./entities/pract.entity").Pract[]>;
    create(createPracticeDto: CreatePracticeDto): Promise<import("./entities/pract.entity").Pract>;
    update(id: string, updatePracticeDto: UpdatePracticeDto): Promise<import("./entities/pract.entity").Pract>;
    remove(id: string): Promise<import("./entities/pract.entity").Pract[]>;
}
