function renderProgress(progress)
{
    progress = Math.floor(progress);

    if(progress<25){
        var angle = -90 + (progress/100)*360;
        document.getElementsByClassName('.animate-0-25-b').transform = "rotate(\""+angle+"\")";
    }
    else if(progress>=25 && progress<50){
        var angle = -90 + ((progress-25)/100)*360;
        document.getElementsByClassName('.animate-0-25-b').transform = "rotate(\"0deg\")";
        document.getElementsByClassName('.animate-25-50-b').transform = "rotate(\""+angle+"\")";
    }
    else if(progress>=50 && progress<75){
        var angle = -90 + ((progress-50)/100)*360;
        document.getElementsByClassName('.animate-25-50-b').transform = "rotate(\"0deg\")";
        document.getElementsByClassName('.animate-0-25-b').transform = "rotate(\"0deg\")";
        document.getElementsByClassName('.animate-50-75-b').transform = "rotate(\""+angle+"\")";
    }
    else if(progress>=75 && progress<=100){
        var angle = -90 + ((progress-75)/100)*360;
        $(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
        document.getElementsByClassName('.animate-0-25-b').transform = "rotate(\"0deg\")";
        document.getElementsByClassName('.animate-25-50-b').transform = "rotate(\"0deg\")";
        document.getElementsByClassName('.animate-50-75-b').transform = "rotate(\"0deg\")";
        document.getElementsByClassName('.animate-75-100-b').transform = "rotate(\""+angle+"\")";
    }
    if(progress==100){

    }
    document.getElementByClassName(".text").innerHTML = progress+"%";
}

function clearProgress()
{
  document.getElementsByClassName('.animate-0-25-b').transform = "rotate(\"90deg\")";
  document.getElementsByClassName('.animate-25-50-b').transform = "rotate(\"90deg\")";
  document.getElementsByClassName('.animate-50-75-b').transform = "rotate(\"90deg\")";
  document.getElementsByClassName('.animate-75-100-b').transform = "rotate(\"90deg\")";
}

var i=0;
setInterval(function (){
                i++;
                if(i>100) {
                    i=0
                    clearProgress();
                }
                renderProgress(i);
}, 200);
