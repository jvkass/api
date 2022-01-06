import { Specification } from "../model/Specitifation";

interface ICreateSpecificationDTO {
    name:string;
    description:string;
}

interface ISpecificationRepository {
    create({description,name}:ICreateSpecificationDTO):void;
    findByName(name: string): Specification;
    list(): Specification[];
}

export {ISpecificationRepository,ICreateSpecificationDTO}