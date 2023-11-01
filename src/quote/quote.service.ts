import { Injectable } from "@nestjs/common";

@Injectable({})
export class QuoteService {
    handleGetAllQuotes (){
        return {
           "data" : [
            {"title":""}
        ]
    }
    }  
    

}