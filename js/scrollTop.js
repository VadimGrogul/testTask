$(document).ready(function(){
    setTimeout(function(){
        $(".sale-block__content").css({"animation": "show-out-block 0.6s ease-in-out",
                                        "opacity" : "1"});
    }, 500);

    var count = 0;

    function showSaleBlockElements(){
        var saleBlockChildren = $(".sale-block__content").children();
        
        saleBlockChildren.eq(count).css({"animation": "show-out-block 0.6s ease-in-out",
                                          "opacity" : "1"});

        count++;
        if(count > saleBlockChildren.length){return false};
    };

    setInterval(showSaleBlockElements, 500);
});