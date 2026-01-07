function product(id,name,price,stock)
{
document.writeln(`<br>Product ID : ${id}<br>
    Name : ${name} <br>
    Price: ${price}<br>
    Stock: ${(stock==true)?"Stcok is Available.":"Stock is Not Available"}<br> <br>`);
}
product(45,"BMWM5",20000000,true);
product(55,"Rolls Royce",10000000,true);
product(88);