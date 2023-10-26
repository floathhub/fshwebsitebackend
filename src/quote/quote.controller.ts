import { Controller, Post, Get } from "@nestjs/common";
import { QuoteService } from "./quote.service";

@Controller('quote')
export class QuoteController {
    constructor(private quoteService: QuoteService){}

    @Get('get-quotes')
    getQuotes(){
        return 'This is all quotes'

    }

    @Post('add-quote')
    postQuotes(){
        return 'New quote created successfully'
        
    }
}