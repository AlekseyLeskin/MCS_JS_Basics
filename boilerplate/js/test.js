money = parseFloat(prompt('сколько у вас с собой есть денег'))
apples = parseFloat(prompt('сколько вы купили яблок'))
bread = parseFloat(prompt('сколько вы купили батонов хлеба'))
priceOfApple = parseFloat(prompt('сколько стоит одно яблоко'))
priceOfBread = parseFloat(prompt('сколько стоит один батон хлеба'))
result = money >= ((apples * priceOfApple) + (bread * priceOfBread))
document.write(result)