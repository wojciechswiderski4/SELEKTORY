$(document).ready(()=>{
  $("input[type='radio']").click(event=>{
    $(".mark").removeClass("mark")
    $(".bod > div " + $(event.target).next().text()).addClass("mark");
  });
  $("input[type='text']").change(event=>{
    $(".mark").removeClass("mark")
    
   $(".bod > div " + $(event.target).val()).addClass("mark");
    if(!$(".bod > div " + $(event.target).val()).length){
      alert("brak selektora na stronie");
    }
  });
  
  
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      $("input").blur();
      return false;
    }
  });
  
  $("button").click(event=>{
    $(".bod > div ").html($($("textarea").val()))
  });
});