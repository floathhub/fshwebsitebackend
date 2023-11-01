import { Injectable } from "@nestjs/common";

@Injectable({})
export class ServicesService {
    handleGetAllService() {
        return {
            "data": [
                {
                    "id": "fsh/service/0f0s0h1",
                    "title": "Mobile App",
                    "price": 150000,
                    "duration": "6",
                    "niche": ["Frontend", "Backend", "Product Management", "Product Design", "Quality Assurance", "Dev Op"]},


                {
                    "id": "fsh/service/0f0s0h2",
                    "title": "Business Website",
                    "price": 100000,
                    "duration": "3",
                    "niche": ["E-Commerce", "Landing Page", "Logistics"],


                },
                {
                    "id": "fsh/service/0f0s0h3",
                    "title": "Software Solution",
                    "price": 2500000,
                    "duration": "5",
                    "niche": ["E-Commerce", "Landing Page", "Logistics", "Fintech"]


                },
                {
                    "id": "fsh/service/0f0s0h4",
                    "title": "Graphics Design",
                    "price": 50000,
                    "duration": "2",
                    "niche": ["Logo", "Banner", "Wedding Iv", "Sourvenir"]


                },
                {
                    "id": "fsh/service/0f0s0h5",
                    "title": "Consultation",
                    "price": 120000,
                    "duration": "4",
                    "niche": ["Part Term", "Permanent", "Contract"]


                },

                {
                    "id": "fsh/service/0f0s0h6",
                    "title": "Career In Tech",
                    "price": 120000,
                    "duration": "4",
                    "niche": ["Web App", "Wordpress", "Mobile App"]


                },
            
         ]
    }
}
}