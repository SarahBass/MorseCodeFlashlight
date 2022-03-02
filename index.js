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
import {goals, today} from "user-activity";
import { units } from "user-settings";
import { vibration } from "haptics";

/*--- Import Information from index.gui ---*/
const playbutton = document.getElementById("playbutton");
const menubutton = document.getElementById("menubutton");
const spacebutton = document.getElementById("spacebutton");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
let background = document.getElementById("background");
let menu = document.getElementById("menu");
// Get a handle on the <text> elements 
const batteryLabel = document.getElementById("batteryLabel");
const morseLabel = document.getElementById("morseLabel");
const userinputLabel = document.getElementById("userinputLabel");
const wordLabel = document.getElementById("wordLabel");
/*--- Create Local Variables for Information Storage ---*/
background.image = "start.png";
let buttonnumber = 0;
let playnumber = 0;
let gamenumber = 0;
let morsecode = "-.";
let morse = "";
let letternumber = 0;
let letter = " ";
const characters ='abcdefghijklmnopqrstuvwxyz1234567890';
const myArray = morsecode.split("");
let word = "";

   /*--- Assign Values based on input Letter---*/
   if (morsecode == ".-") {letter == 'a'}
   if (morsecode == "-...") {letter == 'b'}
   if (morsecode == "-.-."){letter == 'c'}
   if (morsecode == "-.."){letter == 'd'}
   if (morsecode == "."){letter == 'e'}
   if (morsecode == "..-."){letter == 'f'}
   if (morsecode == "--."){letter == 'g'}
   if (morsecode == "...."){letter == 'h'}
   if (morsecode == ".."){letter == 'i'}
   if (morsecode == ".---"){letter == 'j'}
   if (morsecode == "-.-"){letter == 'k'}
   if (morsecode = ".-.."){letter == 'l'}
   if (morsecode = "--"){letter == 'm'}
   if (morsecode = "-."){letter == 'n'}
   if (morsecode = "---"){letter == 'o'}
   if (morsecode = ".--."){letter == 'p'}
   if (morsecode = "--.-"){letter == 'q'}
   if (morsecode = ".-."){letter == 'r'}
   if (morsecode = "..."){letter == 's'}
   if (morsecode = "-"){letter == 't'}
   if (morsecode = "..-"){letter == 'u'}
   if (morsecode = "...-"){letter == 'v'}
   if (morsecode = ".--"){letter == 'w'}
   if (morsecode = "-..-"){letter == 'x'}
   if (morsecode = "-.--"){letter == 'y'}
   if (morsecode = "--.."){letter == 'z'}
   if (morsecode = ".----"){letter == '1'}
   if (morsecode = "..---"){letter == '2'}
   if (morsecode = "...--"){letter == '3'}
   if (morsecode = "....-"){letter == '4'}
   if (morsecode = "....."){letter == '5'}
   if (morsecode = "-...."){letter == '6'}
   if (morsecode = "--..."){letter == '7'}
   if (morsecode = "---.."){letter == '8'}
   if (morsecode = "----."){letter == '9'}
   if ({morsecode = "-----"){letter == '10'}

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
  let milliseconds = today.getMilliseconds();
/*--- Update Stats for Screen ---*/
checkAndUpdateBatteryLevel();
  
  if ((buttonnumber == 0) && (playnumber == 0)){
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
  console.log("play number :" + playnnumber);}
//activate spacebutton for space and print
 spacebutton.onactivate = function(evt) {
   if (morse == morsecode){}
   word += letter;
    wordLabel.text = word;
 }
  
                      button1.class = "clear text-button bottom left "; 
                      button2.class = "clear text-button bottom right "; 
                      button1.text = "dah"; 
                      button2.text = "dih"; 
                      if (morse.length < 4){button1.onactivate = function(evt) {
                                                                                vibration.start("ping");
                                                                                morse  += "-";
                                                                                console.log("morse:" + morse );
                                                                                morseLabel.text = "morse: " + morse; }
                                            button2.onactivate = function(evt) {vibration.start("bump");
                                                                                morse  +=".";
                                                                                console.log("morse:" + morse );
                                                                                morseLabel.text = "morse: " + morse;}}
 }
  
  
  
  if (buttonnumber == 1){
  playnumber = 0;
  menubutton.onactivate = function(evt) {
  buttonnumber++;
     if (buttonnumber > 1){buttonnumber = 0;}
  console.log("button number :" + buttonnumber);}
           button1.class = "none text-button bottom left "; 
                     button2.class = "none text-button bottom right "; 
                     playbutton.onactivate = function(evt) {}
                     button1.onactivate = function(evt) {}
                     button2.onactivate = function(evt) {}
    menu.image = "book.png";
  }
 
    if (playnumber == 1){
      menu.image = "blank.png";
      //hide buttons
       menubutton.onactivate = function(evt) {}
       button1.class = "none text-button bottom left "; 
                     button2.class = "none text-button bottom right "; 
                     button1.onactivate = function(evt) {}
                     button2.onactivate = function(evt) {}
 for (let i = 0; i < morsecode.length; i++){
       
   if (milliseconds%3 == 0) { if (word == '-'){ menu.image = "yellow.png";}             
                         if (word == '.'){ menu.image = "yellow.png";}}
                       
   if (milliseconds%3 == 1) { if (word == '-'){ menu.image = "yellow.png";}
                             if (word == '.'){ menu.image = "purple.png"; }}
   if (milliseconds%3 == 2) {menu.image = "purple.png";}  
   }
    }                                         
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
