Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
}
)
;
camera=document.getElementById("camera");

Webcam.attach( '#camera' );
function snapshot() {
     Webcam.snap(function (data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'; }); }

    

console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5MHIImqfm/model.json",modelloaded)

function modelloaded(){
    console.log("model loaded");
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResults);
}

function gotResults(error,Results){
    if(error){
        console.log("error");
    }
    else{
        console.log(Results)
        document.getElementById("result_object_name").innerHTML=Results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=Results[0].confidence.toFixed(3);
    }
}