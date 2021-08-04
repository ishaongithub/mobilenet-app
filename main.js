Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"

    }

});
camera=document.getElementById('camera');
Webcam.attach('#camera');
var shutter = new Audio(); 
shutter.src ='shutter.wav';
//dummy function to test
function take_snapshot(){
    shutter.play();
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version: ", ml5.version);
classifier=ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function check(){
        img=document.getElementById('captured_image');
        classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}