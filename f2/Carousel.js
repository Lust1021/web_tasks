    var index = 1;  
    var animatable = true;

    $("#pre").on("click",function(){
        if(animatable){
            index--;
        }
        else{ 
            return false;
        }
        animatable=false;
    　　 var pos = index * (-1200) + "px";
        $("#picture").animate({"left":pos},2000,function(){
            animatable=true;
            if(index <= 0){
                $("#picture").css({"left":"-3600px"});
                index = 3;
            }
        });
    })
    
    $("#next").on("click",function(){
        if(animatable){
            index++;
        }
        else{ 
            return false;
        }
        animatable=false;
        var pos = index * (-1200) + "px";
        $("#picture").animate({"left":pos},2000,function(){
            animatable=true;
            if(index >= 4){
                $("#picture").css({"left":"-1200px"});
                index = 1;
            }
        });
    })
    $("#first").mouseover(function(){
        $("#picture").animate({"left":"-1200px"},2000,function(){
            index=1;
        });
    })
    $("#second").mouseover(function(){
        $("#picture").animate({"left":"-2400px"},2000,function(){
            index=2;
        });
    })
    $("#third").mouseover(function(){
        $("#picture").animate({"left":"-3600px"},2000,function(){
            index=3;
        });
    })
