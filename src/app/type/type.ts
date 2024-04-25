export interface HotelLists {
    id: number;
    hotel_name: string;
    hotel_details: string;
    hotel_img: string;

}

export interface RecommendedHotel {
    id: number;
    hotel_img: string;
    hotel_title1: string;
    hotel_title2: string;
}

export interface PaymentMethod {
    id: number;
    payment_name: string;
    payment_img: string;
}