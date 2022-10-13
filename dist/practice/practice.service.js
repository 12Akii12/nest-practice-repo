"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pract_entity_1 = require("./entities/pract.entity");
let PracticeService = class PracticeService {
    constructor(practiceRepository) {
        this.practiceRepository = practiceRepository;
    }
    findAll() {
        return this.practiceRepository.find();
    }
    async findOne(id) {
        const practVar = await this.practiceRepository.findBy({ id: id });
        if (!practVar) {
            throw new common_1.NotFoundException(`Practice with #${id} not found`);
        }
        return practVar;
    }
    create(createPracticeDt0) {
        const practice = this.practiceRepository.create(createPracticeDt0);
        return this.practiceRepository.save(practice);
    }
    async update(id, updatePracticeDt0) {
        const practice = await this.practiceRepository.preload(Object.assign({ id: +id }, updatePracticeDt0));
        if (!practice) {
            throw new common_1.NotFoundException(`practice #${id} not found`);
        }
        return this.practiceRepository.save(practice);
    }
    async remove(id) {
        const practiceID = await this.practiceRepository.findBy({ id: id });
        return this.practiceRepository.remove(practiceID);
    }
};
PracticeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pract_entity_1.Pract)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PracticeService);
exports.PracticeService = PracticeService;
//# sourceMappingURL=practice.service.js.map