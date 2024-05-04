
var Num1 = 89;
var Num2 = 20;


var sum = Num1 + Num2;
document.write("The sum of " + Num1 + " and " + Num2 + " is " + sum + ".");
var subtraction =Num1 - Num2;
document.write( "<br>"+"The subtraction of " + Num1 + " and " + Num2 + " is " + subtraction + ".");
var product =Num1 * Num2;
document.write( "<br>"+"The product of " + Num1 + " and " + Num2 + " is " + product + ".");
var Quoteint=Num1 / Num2;
document.write( "<br>"+"The division of " + Num1 + " and " + Num2 + " is " + Quoteint + ".");
var Remainder=Num1 % Num2;
document.write( "<br>"+"The modulus of " + Num1 + " and " + Num2 + " is " + Remainder + ".");


var totalVolume;
document.write(  "<br>"+"<br>"+"Value after variable declaration is: " + totalVolume + "<br>");
totalVolume = 90;
document.write("Initial value: " + totalVolume + "<br>");
totalVolume++;
document.write("Value after increment is: " + totalVolume + "<br>");
totalVolume += 7;
document.write("Value after addition is: " + totalVolume+ "<br>");
totalVolume--;
document.write("Value after decrement is: " + totalVolume + "<br>");
var remainder = totalVolume % 3;
document.write("The remainder is: " + remainder);
 
 var PriceOfTicket = 600;
 var numberOfTickets = 9;
 var totalCost = PriceOfTicket * numberOfTickets;
 document.write( "<br>"+"<br>"+"The total cost of buying " + numberOfTickets + " movie tickets is " + totalCost + " PKR.");
document.write("<br>"+"<br>"+"<h1>table of 89:</h1>")
 var num_1= 89;
  var num_2 = 1;
  var num_3 = 1
 
 document.write(
    "<br>"+"<br>"+num_1 + "X" + num_2++ + "=" + num_1 * num_3++ + "<br>" +
         num_1 + "X" + num_2++ + "=" + num_1 * num_3++ + "<br>" +
    num_1 + "X" + num_2++ + "=" + num_1 * num_3++ + "<br>" +
         num_1 + "X" + num_2++ + "=" + num_1 * num_3++ + "<br>" + num_1 + "X" + num_2++ + "=" + num_1 * num_3++ + "<br>" +
        num_1 + "X" +num_2++ + "=" + num_1 * num_3++ + "<br>" + num_1 + "X" + num_2++ + "=" + num_1 * num_3++ + "<br>" +
        num_1 + "X" + num_2++ + "=" + num_1 * num_3++ + "<br>" +
        num_1 + "X" + num_2++ + "=" + num_1 * num_3++ + "<br>" +
         num_1 + "X" + num_2++ + "=" + num_1* num_3++ + "<br>" )


         var celsiusTemperature = 670;
         var fahrenheitTemperature = (celsiusTemperature * 9/5) + 902;
         document.write( "<br>"+"<br>"+celsiusTemperature + "°C is " + fahrenheitTemperature + "°F" + "<br>");
         var fahrenheitTemp = 707;
         var celsiusTemp = (fahrenheitTemp - 302) * 5/9;
         document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");


         var priceItem1 = 1000;
         var priceItem2 = 700;
         var quantityItem1 = 9;
         var quantityItem2 = 5;
         var shippingCharges = 100;
         var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
         document.write("<h1>Shopping Cart:</h1>");
         document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
         document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
         document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
         document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
         document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
         document.write("<p><strong>Total Cost: " + totalCost + " PKR</strong></p>");


    var totalMarks = 550;
    var marksObtained = 432;
    var percentage = (marksObtained / totalMarks) * 100;
    document.write("<h1>Mark Sheet:</h1>");
    document.write("Total Marks: " + totalMarks);
    document.write("<br>"+"Marks Obtained: " + marksObtained );
    document.write( "<br>"+"Percentage: " + percentage.toFixed(2) + "%");
     
    var usDollars = 20;
    var saudiRiyals = 85;
    var exchangeRateUSD = 204.80;
    var exchangeRateSAR = 28;
    var totalRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);
    document.write("<h1>Currency Conversion:</h1>");
    document.write("<br>"+"Total US Dollars: " + usDollars);
    document.write("<br>"+"Total Saudi Riyals: " + saudiRiyals );
    document.write("<br>"+"Total Pakistani Rupees: " + totalRupees + " PKR");


    var thenumber = 8;
    var result = (((thenumber + 5) * 10) / 2);

    // Display the result
    document.write("<h2>Arithmetic Operations:</h2>");
    document.write("<p>Initial Number: " + thenumber + "</p>");
    document.write("<p>Result: " + result + "</p>");




    var currentYear = 2024;
    var birthYear = 2009;
    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;
    document.write("<h1>The Age Calculator:</h1>");
    document.write( "<br>"+"Current year:2024");
    document.write( "<br>"+"Birth year:2009");
    document.write( "<br>"+"Your age is:either 14 or 15");



    var radius = 20;
    var circumference = 2 * Math.PI * radius;
    var area = Math.PI * radius * radius;
    document.write("<h1>The Geometrizer:</h1>");
    document.write("the radius of a circle" + radius + "<br>");
    document.write("The circumference is " + circumference.toFixed(2) + "<br>");
    document.write("The area is " + area.toFixed(2));




    var favoriteSnack = "chocolate bars";
    var currentAge = 15;
    var estimatedmaxage = 65;
    var AmountPerDay = 3;
    var yearsRemaining = estimatedmaxage - currentAge;
    var totalSnacks = yearsRemaining * 365 *  AmountPerDay;

    
    document.write("<h1>Lifetime Supply Calculator:</h1>");
    document.write("<br>"+"current age: "+ currentAge);
    document.write("<br>"+"Estimated Maximun Age: "+ estimatedmaxage);
    document.write("<br>"+"Amount of snacks per day: "+ currentAge);
    

    document.write("<br>"+"You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + estimatedmaxage + ".");