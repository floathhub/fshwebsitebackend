import { Controller, Post, Get } from "@nestjs/common";
import { QuoteService } from "./quote.service";

@Controller('quote')
export class QuoteController {
    constructor(private quoteService: QuoteService){

    }

    @Get('get-quotes')
    getQuotes(){
       return 'hiiio'

    }

    @Post('add-quote')
    postQuotes(){
        return 'New quote created successfully'
        
    }
}