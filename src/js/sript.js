var strSum = prompt("შეიყვანეთ ანაბრის თანხა" , 1000)
var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი" , 10)
var finalAmount = parseInt(strSum)
var finalPercent = parseInt(strPercent)
finalAmount = finalAmount + finalAmount * finalPercent / 100

if ( strPercent < 10 && strSum < 1000 ) {
    document.write("ამას სჯობს ეს თანხა დახარჯო")
} else if ( strPercent >= 25 ) {
    document.write("თანხა არ მაინტერესებს პროსტა მითხარი სად ნახე ასეთი ანაბარი")
} else if ( strPercent >= 10 && strSum < 1000 ) {
    document.write("კაია პროცენტია მარა მაგ თანიხთ მოგება არ გექნება დიდი")
} else if ( strPercent < 10 && strSum >= 1000 ) {
    document.write("კაია თანხაა მაგრამ პროცენტი დაბალია")
} else {
    document.write("კაი ანაბარია")
}

document.write("\n" + finalAmount)