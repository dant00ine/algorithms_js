function orderSupplies(item, callback){
    // var warehouse; // undefined
    // var deliveryTime = Math.random() * 3000;
    // setTimeout(function(){
    //     warehouse = {
    //         paint: {
    //             product: "Neon Green Paint",
    //             directions: function(){ return "mix it!"; }
    //         },
    //         brush: {
    //             product: "Horsehair brush",
    //             directions: function(){ return "start painting!"; }
    //         }
    //     };
    //     callback(warehouse[item]);
    // }, deliveryTime);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        }, 10000)
    })

}

function printResult(item){
    console.log(`${item['product']} received, time to start ${item.directions}`);
}

var printReceipt = orderSupplies('paint', printResult)

printReceipt.then(console.log("resolved"))
