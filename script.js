$(document).ready(function () {
  $.ajax({
    url: "json_files/menu.json",
    //handle as text
    dataType: "text",
    success: function (data) {
        //data downloaded + pass data
        var json = $.parseJSON(data);
        // display results

        $("#firstcake").attr("src", json.menu[0].image);
        $("#secondcake").attr("src", json.menu[1].image);
        $("#thirdcake").attr("src", json.menu[2].image);
        $("#fourthcake").attr("src", json.menu[3].image);
        $("#fifthcake").attr("src", json.menu[4].image);
        $("#sixthcake").attr("src", json.menu[5].image);
       
    }
  });
  $.ajax({
    url: "https://my-json-server.typicode.com/HumeyraTEZCAN/api-test/images",
    //handle as text
    dataType: "text",
    success: function (data) {
        //data downloaded + pass data
        var json = $.parseJSON(data);
        // display results
        $("#firstimg").css("background-image", "url(" + json[0].url + ")");
        $("#secondimg").css("background-image", "url(" + json[1].url + ")");
        $("#thirdimg").css("background-image", "url(" + json[2].url + ")");
        $("#fourthimg").css("background-image", "url(" + json[3].url + ")");
  
    }
  });
});





//jquery preloader plugin bu normal plugin
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum felis lacinia, consectetur mi feugiat, / faucibus nisl. Aliquam sollicitudin scelerisque lacus vitae malesuada. Cras tempor sapien lacus, nec hendrerit nibh viverra at. In et / lacus nisi. Mauris bibendum, elit eget malesuada laoreet, ex ligula lacinia felis, et consequat quam sapien id quam. Morbi id turpis nisi. Phasellus vitae lorem at / ligula suscipit pulvinar. Phasellus id lacus vel nunc vestibulum semper. Integer et congue lacus. Vestibulum in bibendum lorem, eu volutpat velit. / Praesent tempor porttitor neque, at rutrum nulla interdum a. Suspendisse potenti. Suspendisse vel dui eget metus accumsan faucibus dictum ac orci./ Morbi in mi sit amet lectus convallis ultrices et in mauris.";
const myArray = text.split("/");
var i=1;
 $(document).ready(function(){
    //tooltip plugin UI plugin
    $(".dialog").hide();
    $(function() {  
   $("#tool-tip-for-phone").tooltip(); 
    });  
    //preloader plugin
    $(window).on('load',function() {
      $(".preloader").fadeOut(2000);
   });

//about us next button jquery plugin
 $("#changeBg").click(function() {
    if(i==5){
      i=0;
   }
   $("#area2 p").html(myArray[i]);
   
   i++;
 });
 $(".show-dialog").click(function(){
   
   $(".dialog").show();
 });
 $(".cancel-dialog").click(function(){
   
   $(".dialog").hide();
 });

   });
 