const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
    //console.log("Debug Info");
    var price = [];
    var total = '***<没钱赚商店>购物清单***\n';
    for(let barcode of inputs){
        let item = loadAllItems().find((item) => item.barcode == barcode);
        var buy_item = price.find((item) => item.barcode == barcode)
        if(buy_item){
            buy_item.num++;
        }
        else{
            var new_item = {
                barcode:item.barcode,
                name:item.name,
                unit:item.unit,
                price:item.price,
                num:1
                
            }; 
            price.push(new_item);
        }
    }
    var total_price = 0;
    for(let item of price){
        let item_price = item.num*item.price;
        total_price += item_price;
        total += '名称：'+item.name+'，数量：'+item.num+item.unit+'，单价：'+item.price.toFixed(2)+'(元)，小计：'+item_price.toFixed(2)+'(元)\n';
    }
    total += '----------------------\n'+
    '总计：'+total_price.toFixed(2)+'(元)\n'+
    '**********************';
    return total;
};
