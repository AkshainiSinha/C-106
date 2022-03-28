function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classfier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vCkLEZLO1/model.json',modelReady)
}
function modelReady(){
    classfier.classify(gotResults)
}
lion="0"
cat="0"
dog="0"
cow="0"
function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    red=Math.floor(Math.random()*255)*1;
    blue=Math.floor(Math.random()*255)*1;
    green=Math.floor(Math.random()*255)*1;
        document.getElementById("sound_identification").innerHTML=answer[0].label;
        document.getElementById("accuracy").innerHTML=(answer[0].confidence).toFixed(2);
        document.getElementById("answer_label").style.color="rgb("+r+","+g+","+b+")"
        document.getElementById("answer_label2").style.color="rgb("+r+","+g+","+b+")"
        img1=document.getElementById("dog");
        img2=document.getElementById("cat");
        img3=document.getElementById("cow");
        img4=document.getElementById("lion");
    if(answer[0].label=="Dog sound"){
        img1.src="dog_img.png"
    }
    if(answer[0].label=="Cat sound"){
        img2.src="cat_img.png4"
        
    }
    if(answer[0].label=="Cow sound"){
        img3.src="cow.png"
    }
    if(answer[0].label=="Keyboard"){
       img4.src="lion.png"
    }
}
}

