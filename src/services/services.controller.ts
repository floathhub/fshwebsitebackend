import { Controller, Injectable,Get,Post } from "@nestjs/common";
import { ServicesService } from "./services.service";

@Controller('service')
export class ServicesController {
    constructor (private servicesService : ServicesService){}

    @Get('get-services')
    getAllService(){
       return this.servicesService.handleGetAllService();

    }

    @Get('get-service')
    getAService(){
        
    }

    @Post('create-services')
    createServices(){
        
    }

    @Post('create-service')
    createAService(){
        
    }

}