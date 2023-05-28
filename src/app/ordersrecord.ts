export class Ordersrecord {
     id:number;
     oid:number;
	itemname:string;
	itemprice:number;
	quantity:number;
    userid:number;
	 totalprice:number;
	categoryname:string;
	dateoforder:Date;
    constructor(oid:number, userid:number,itemname:string,itemprice:number,quantity:number,totalprice:number,categoryname:string,dateoforder:Date)
    {
        this.oid=oid;
     this.itemname=itemname;
     this.itemprice=itemprice;
     this.quantity=quantity;
     this.totalprice=totalprice;
     this.categoryname=categoryname;
     this.dateoforder=dateoforder;
     this.userid=userid;
    }
}
