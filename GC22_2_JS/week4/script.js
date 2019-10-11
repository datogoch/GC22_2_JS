function testAlert(){
    alert("hello gau");
}
function testPrompt(){
    div= document.getElementById("result1");
    data=prompt("input your name");
    if(data==null){
        data="this is an error";

    }else{
        data="hello " + data;
    }
    div.innerHTML = data;
}
function testConfirm(){
    data=confirm("gaiqeci sanam shegidzlia");
    console.log(data);
}
function testString1(){
    Text= "saxlshi minda dzaan minda ,  minda";
    text1="imedia am ragacashi ar chavichrebi";
    console.log(Text.match(/minda/g));
    console.log(Text);
    console.log(Text.length);
    console.log(Text.indexOf("minda"));
    console.log(Text.slice(3,5));
    console.log(Text.substr(3,5));
    Text.replace("minda", "gamishvit");
    console.log(Text.replace(new RegExp("boy",'g'), "gamishvit"));
    textFull=text1 + Text;
    console.log(textFull);
}

function testChar(){
    Text= "saxlshi minda dzaan mida,  minda";
    console.log(Text[4]);
    console.log(Text.charCodeAt(3));
    console.log(Text.charCodeAt(3).toString(2))
}
function findANumber(){
    Text=document.getElementById("textId").value;
    console.log(Text);
    cout = 0;
    for(i=0;i<Text.length;i++){
        if(text[i]=='a'){
            cout++;
        }
    }
    document.getElementById("result3").innerText=cout;
}

function randomStr(){
    div=document.getElementById(id)
    chars= ["a","b","c","v"]
    rand=[]
    for(var i=0;i<10;i++){
        
        character=char[Math.floor(Math.random()*chars.length)]
        rand.push(character)
    }
    div.innerHTML=rand.join('')
}