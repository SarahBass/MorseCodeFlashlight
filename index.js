/*--- Import Information from user Account ---*/
import { settingsStorage } from "settings";
import { me as appbit } from "appbit";
import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { battery } from 'power';
import { display } from "display";
import { today as userActivity } from "user-activity";
import { units } from "user-settings";
import { vibration } from "haptics";
import { geolocation } from "geolocation";

/*--- Import Information from index.gui ---*/
const playbutton = document.getElementById("playbutton");
const menubutton = document.getElementById("menubutton");
const spacebutton = document.getElementById("spacebutton");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
let background = document.getElementById("background");
let menu = document.getElementById("menu");
// Get a handle on the <text> elements 
const clockLabel = document.getElementById("clockLabel");
const locationLabel = document.getElementById("locationLabel");
const batteryLabel = document.getElementById("batteryLabel");
const morseLabel = document.getElementById("morseLabel");
const userinputLabel = document.getElementById("userinputLabel");
const wordLabel = document.getElementById("wordLabel");
/*--- Create Local Variables for Information Storage ---*/
background.image = "sos.png";
let spacenumber = 0;
let buttonnumber = 0;
let playnumber = 0;
let gamenumber = 0;
let morsecode = "";
let morse = "";
let letternumber = 0;
let letter = "";
let word = "";
let j = 0;
let k = 0;
let sos = 0;

  

//Update the clock every second 
clock.granularity = "seconds";

clock.ontick = (evt) => {

  let today = evt.date;
  let hours = today.getHours();
  let months = today.getMonth();
  let days = today.getDay();
  let dates = today.getDate();
  let years = today.getFullYear();
  let mins = util.zeroPad(today.getMinutes());
  let seconds = today.getSeconds();
 
/*--- Update Stats for Screen ---*/
checkAndUpdateBatteryLevel();

   /*--- Assign Values based on input Letter---*/
   if (morsecode == ".-"){letter = 'a';}
   if (morsecode == "-..."){letter = 'b';}
   if (morsecode == "-.-."){letter = 'c';}
   if (morsecode == "-.."){letter = 'd';}
   if (morsecode == "."){letter = 'e';}
   if (morsecode == "..-."){letter = 'f';}
   if (morsecode == "--."){letter = 'g';}
   if (morsecode == "...."){letter = 'h';}
   if (morsecode == ".."){letter = 'i';}
   if (morsecode == ".---"){letter = 'j';}
   if (morsecode == "-.-"){letter = 'k';}
   if (morsecode == ".-.."){letter = 'l';}
   if (morsecode == "--"){letter = 'm';}
   if (morsecode == "-."){letter = 'n';}
   if (morsecode == "---"){letter = 'o';}
   if (morsecode == ".--."){letter = 'p';}
   if (morsecode == "--.-"){letter = 'q';}
   if (morsecode == ".-."){letter = 'r';}
   if (morsecode == "..."){letter = 's';}
   if (morsecode == "-"){letter = 't';}
   if (morsecode == "..-"){letter = 'u';}
   if (morsecode == "...-"){letter = 'v';}
   if (morsecode == ".--"){letter = 'w';}
   if (morsecode == "-..-"){letter = 'x';}
   if (morsecode == "-.--"){letter = 'y';}
   if (morsecode == "--.."){letter = 'z';}
   if (morsecode == ".----"){letter = '1';}
   if (morsecode == "..---"){letter = '2';}
   if (morsecode == "...--"){letter = '3';}
   if (morsecode == "....-"){letter = '4';}
   if (morsecode == "....."){letter = '5';}
   if (morsecode == "-...."){letter = '6';}
   if (morsecode == "--..."){letter = '7';}
   if (morsecode == "---.."){letter = '8';}
   if (morsecode == "----."){letter = '9';}
   if (morsecode == "-----"){letter = '10';}
  
  if (sos == 0) {
    userinputLabel.text = "";
    wordLabel.text = " ";
    morseLabel.text = "Click Start to Enter";
      spacebutton.text = "Click SOS for quick help";
  playnumber = 0;
  menubutton.onactivate = function(evt) {}
  console.log("button number :" + buttonnumber);
           button1.class = "clear text-button bottom left "; 
                     button2.class = "clear text-button bottom right "; 
                     button1.text = "start";
                     button2.text = "SOS";
                     playbutton.onactivate = function(evt) {}
                     button1.onactivate = function(evt) {sos = 1;}
                     button2.onactivate = function(evt) {sos = 2;}
    spacebutton.onactivate = function(evt) {}
    
  }
  
  if (sos == 2) {
    hours = util.zeroPad(hours);
    clockLabel.text = `${hours}:${mins}` + ": " + (months+1) + "/"+ dates +"/"+ years;
    var watchID = geolocation.watchPosition(locationSuccess, locationError, { timeout: 60 * 1000 });

function locationSuccess(position) {
    console.log("Latitude: " + position.coords.latitude,
                "Longitude: " + position.coords.longitude);
  locationLabel.text = "la: " + position.coords.latitude + "Lo: " + position.coords.longitude ;
}

function locationError(error) {
  console.log("Error: " + error.code,
              "Message: " + error.message);
}
    
    wordLabel.text = " ";
    morseLabel.text = " ";
      spacebutton.text = "";
  playnumber = 0;
  menubutton.onactivate = function(evt) {}
  console.log("button number :" + buttonnumber);
           button1.class = "none text-button bottom left "; 
                     button2.class = "none text-button bottom right "; 
                     playbutton.onactivate = function(evt) {}
                     button1.onactivate = function(evt) {}
                     button2.onactivate = function(evt) {}
    spacebutton.onactivate = function(evt) {}
  if (seconds%22 == 0){menu.image = "yellow.png"; wordLabel.text = "s";}
    if (seconds%22 == 1){menu.image = "purple.png"; wordLabel.text = " ";}
    if (seconds%22 == 2){menu.image = "yellow.png"; wordLabel.text = "s";} 
    if (seconds%22 == 3){menu.image = "purple.png"; wordLabel.text = " ";}
    if (seconds%22 == 4){menu.image = "yellow.png"; wordLabel.text = "s";} 
    if (seconds%22 == 5){menu.image = "purple.png"; wordLabel.text = " ";}
                      
    if (seconds%22 == 6){menu.image = "yellow.png"; wordLabel.text = "o";} 
    if (seconds%22 == 7){menu.image = "yellow.png"; wordLabel.text = "o";}
    if (seconds%22 == 8){menu.image = "purple.png"; wordLabel.text = " ";}
    if (seconds%22 == 9){menu.image = "yellow.png"; wordLabel.text = "o";} 
    if (seconds%22 == 10){menu.image = "yellow.png"; wordLabel.text = "o";}    
    if (seconds%22 == 11){menu.image = "purple.png"; wordLabel.text = " ";}
    if (seconds%22 == 12){menu.image = "yellow.png"; wordLabel.text = "o";} 
    if (seconds%22 == 13){menu.image = "yellow.png"; wordLabel.text = "o";} 
    if (seconds%22 == 14){menu.image = "purple.png"; wordLabel.text = " ";}
        
    if (seconds%22 == 15){menu.image = "yellow.png"; wordLabel.text = "s";}
    if (seconds%22 == 16){menu.image = "purple.png"; wordLabel.text = " ";}
    if (seconds%22 == 17){menu.image = "yellow.png"; wordLabel.text = "s";} 
    if (seconds%22 == 18){menu.image = "purple.png"; wordLabel.text = " ";}
    if (seconds%22 == 19){menu.image = "yellow.png"; wordLabel.text = "s";} 
    if (seconds%22 == 20){menu.image = "purple.png"; wordLabel.text = " ";} 
                        
    if (seconds%22 == 21){menu.image = "purple.png"; wordLabel.text = "sos";}  } 
  
   if (sos == 1){     
     background.image = "start.png";
                          
  if ((buttonnumber == 0) && (playnumber == 0)){
    if (word.length >9){
      word = "";
      morse = ""; 
      morsecode="";
      letter="";}
    
    morseLabel.text = "morse: ";
    userinputLabel.text = "next letter : " + letter;
    wordLabel.text = word; 
    if (spacenumber == 0){spacebutton.text = "Space";}
    menu.image = "blank.png";
  //activate button for dictionary
  menubutton.onactivate = function(evt) {
  buttonnumber++;
     if (buttonnumber > 2){buttonnumber = 0;}
  console.log("button number :" + buttonnumber);}
  //activate button for play
  playbutton.onactivate = function(evt) {
  playnumber++;
    if (playnumber > 1){playnumber = 0;}
  console.log("play number :" + playnumber);}
//activate spacebutton for space and print
 spacebutton.onactivate = function(evt) {
   spacenumber++;
   if (spacenumber == 1){
     spacebutton.text = "Enter this letter?";
     
     button1.class = "clear text-button bottom left "; 
                      button2.class = "clear text-button bottom right "; 
                      button1.text = "yes"; 
                      button2.text = "no"; 
    button1.onactivate = function(evt) { word += letter; morse += "*";
                      button1.class = "none text-button bottom left "; 
                      button2.class = "none text-button bottom right "; 
                      button1.text = ""; 
                      button2.text = ""; 
                      spacebutton.text = "confirm";}
   button2.onactivate = function(evt) { 
                      button1.class = "none text-button bottom left "; 
                      button2.class = "none text-button bottom right "; 
                      button1.text = ""; 
                      button2.text = ""; 
                      spacebutton.text = "clear"
                     for (let i = 0; i < morsecode.length; i++){
                      morse = morse.slice(0, -1)}
                      letter = "";
                      console.log("morse:" + morse );
                      morseLabel.text = "morse: " + morsecode;}
     
     }
   if (spacenumber > 1){
     spacebutton.text = "Entered";
     morseLabel.text = "morse: ";
     morsecode = "";
     spacenumber = 0; 
     letter = "";}
   
   console.log("space number :" + spacenumber);
   console.log("morsecode :" + morsecode);
   console.log("letter :" + letter);
   console.log("word :" + word);
  
 }
  if (spacenumber == 0){
                      button1.class = "clear text-button bottom left "; 
                      button2.class = "clear text-button bottom right "; 
                      button1.text = "dah"; 
                      button2.text = "dih"; 
                                           button1.onactivate = function(evt) {
                                                                                vibration.start("ping");
                                                                                morse  += "-";
                                                                                morsecode  += "-";
                                                                                console.log("morse:" + morse );
                                                                                morseLabel.text = "morse: " + morsecode; }
                                            button2.onactivate = function(evt) {vibration.start("bump");
                                                                                morse  +=".";
                                                                                morsecode  += ".";
                                                                                console.log("morse:" + morse );
                                                                                morseLabel.text = "morse: " + morsecode;}
 }}
  
  
  
  if (buttonnumber == 1){
     userinputLabel.text = "";
    wordLabel.text = " ";
    morseLabel.text = " ";
      spacebutton.text = "";
  playnumber = 0;
  menubutton.onactivate = function(evt) {
  buttonnumber++;
     if (buttonnumber == 2){buttonnumber = 0;}
  console.log("button number :" + buttonnumber);}
           button1.class = "none text-button bottom left "; 
                     button2.class = "none text-button bottom right "; 
                     playbutton.onactivate = function(evt) {}
                     button1.onactivate = function(evt) {}
                     button2.onactivate = function(evt) {}
    spacebutton.onactivate = function(evt) {}
  
    menu.image = "book.png";
  }
 
    if (playnumber == 1){
     userinputLabel.text = "";
    wordLabel.text = " ";
    morseLabel.text = "Start Flashlight?";
      spacebutton.text = "yes or no?";
      //hide buttons
       menubutton.onactivate = function(evt) {}
       button1.class = "clear text-button bottom left "; 
                     button2.class = "clear text-button bottom right "; 
      button1.text = "yes";
      button2.text = "no"
                     button1.onactivate = function(evt) { playnumber= 2}
                     button2.onactivate = function(evt) {playnumber = 3;}
    }
      
      if (playnumber == 3){
     userinputLabel.text = "Would you like to start over?";
    wordLabel.text = " ";
    morseLabel.text = "Clear Morse";
      spacebutton.text = "yes or no?";
      //hide buttons
       menubutton.onactivate = function(evt) {}
       button1.class = "clear text-button bottom left "; 
                     button2.class = "clear text-button bottom right "; 
      button1.text = "yes";
      button2.text = "no"
                     button1.onactivate = function(evt) {
      word = "";
      morse = ""; 
      morsecode="";
      letter=""; 
     playnumber = 0; buttonnumber=0;              }
                     button2.onactivate = function(evt) {playnumber = 0; buttonnumber=0;}}
  
  if (playnumber == 2){
    
    hours = util.zeroPad(hours);
    clockLabel.text = `${hours}:${mins}` + ": " + (months+1) + "/"+ dates +"/"+ years;
    var watchID = geolocation.watchPosition(locationSuccess, locationError, { timeout: 60 * 1000 });

function locationSuccess(position) {
    console.log("Latitude: " + position.coords.latitude,
                "Longitude: " + position.coords.longitude);
  locationLabel.text = "la: " + position.coords.latitude + "Lo: " + position.coords.longitude ;
}

function locationError(error) {
  console.log("Error: " + error.code,
              "Message: " + error.message);
}
    console.log("playnumber: " + playnumber);
    console.log("seconds: " + seconds);
    console.log("morse:" + morse);
      userinputLabel.text = "";
    morseLabel.text = " ";
   
      spacebutton.text = "";
 
           menubutton.onactivate = function(evt) {}
           button1.class = "none text-button bottom left "; 
                     button2.class = "none text-button bottom right "; 
                     playbutton.onactivate = function(evt) {}
                     button1.onactivate = function(evt) {}
                     button2.onactivate = function(evt) {}
    spacebutton.onactivate = function(evt) {}
   
   if (j > (morse.length - 1)){j=0;};
  
    const myArray = morse.split("");
   if (seconds%3 == 0) { 
                         if (myArray[j] == '*'){ menu.image = "purple.png"; wordLabel.text = "space";}
                         if (myArray[j] == '-'){ menu.image = "yellow.png"; wordLabel.text = "-";}             
                         if (myArray[j] == '.'){ menu.image = "yellow.png"; wordLabel.text = ".";}}
                       
   if (seconds%3 == 1) {      
                             if (myArray[j] == '*'){ menu.image = "purple.png"; wordLabel.text = "space";}
                             if (myArray[j] == '-'){ menu.image = "yellow.png";wordLabel.text = "-"; }
                             if (myArray[j] == '.'){ menu.image = "purple.png";wordLabel.text = " ";}}
    
     if (seconds%3 == 2) { menu.image = "purple.png"; wordLabel.text = " "; j++; k++;}
                          
                       
     /*---------------------------------------------------------------------------------------------------------*/
    
  
        
  } }                              
 /*-------------------------------------- Battery Functions -------------------------------------*/
  display.addEventListener('change', function () { if (this.on) {checkAndUpdateBatteryLevel();}});
}

/*----------------------------START OF FUNCTIONS--------------------------------*/
                                                
 /*--- Change Battery RED , GREEN & CHARGE ---*/  
function checkAndUpdateBatteryLevel() {
  batteryLabel.text = `${battery.chargeLevel}%`;
  if (battery.chargeLevel > 30){ batteryLabel.class = "labelgreen";}
  else {batteryLabel.class = "labelred";
        battery.onchange = (charger, evt) => {batteryLabel.class = "labelgreen";}}}
