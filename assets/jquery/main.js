$(document).ready(function () {

    var index = 0;
    showproducts();

    function showproducts() {



        var s = $(".product-image"); //Selects targeted image
        var det = $(".details");
        var dot = $(".dot");
        for (i = 0; i < s.length; i++) { //loops through all images and hides them
            $(s[i]).hide();
            $(det[i]).hide();
            $(dot[i]).hide();
        }

       console.log(det[i]);
        index = index + 1; //incremets index value 
        $(s[(index - 1)]).show();
        $(det[index - 1]).show();
        $(dot[index - 1]).show();//First images is always shown

        $('.next').click(function () { //Click function for the next button

            index = index + 1;

            if (index > s.length) {
                index = 1; //Checks if index value is greater then number of elements then bring it down to lower index
            }
            if (index < 1) {
                index = s.length; // if it's lower then lowen index then put to higher index
            }
            for (i = 0; i < s.length; i++) {
                $(s[i]).hide();
                $(det[i]).hide(); //hhide all the images or elemts
                $(dot[i]).hide();
            }
            $(s[(index - 1)]).show(); //then show the index image
            $(det[index - 1]).show();
            $(dot[index - 1]).show();

        });
       



    }

});     