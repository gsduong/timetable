/**
 * Created by nguyen on 11/01/2017.
 */
"use strict";

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function( event ) {
    console.log("drag");

}, false);

document.addEventListener("dragstart", function( event ) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    console.log("dragstart");
}, false);

document.addEventListener("dragend", function( event ) {
    // reset the transparency
    event.target.style.opacity = "";
    console.log("dragend");
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
    console.log("dragover");
}, false);

document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "gray";
        console.log("dragenter");
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
        console.log("dragleave");
    }

}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
        var nodeCopy = dragged.cloneNode(true);
        nodeCopy.attributes.draggable = false
        console.log(nodeCopy.attributes.draggable);
        console.log(nodeCopy.attributes);
        event.target.appendChild( nodeCopy );
        console.log("drop");
        
    }

}, false);
