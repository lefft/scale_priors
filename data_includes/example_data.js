// TODO
// 
//   - validate response before allowing continue 
//   - generate all items 

//var shuffleSequence = seq("consent","intro", randomize(seq(startsWith("IE"),startsWith("SE"),startsWith("WE"))),"questionnaire");
//var shuffleSequence = seq("intro", "ext1", "ext2", rshuffle(startsWith("shape_"),rshuffle(startsWith("artifact_"))),'questionnaire');


var shuffleSequence = seq("intro", rshuffle(startsWith("shape_"),rshuffle(startsWith("artifact_"))),'questionnaire');



var practiceItemTypes = ["practice"];

var showProgressBar = false;
var pageTitle = "Mechanical Turk Experiment";
var completionMessage = "all good, thx";
//    "The results were successfully sent to the server. You can now validate your participation on Mechanical Turk. Thanks!";
var completionErrorMessage = "something went wrong";
//    "There was an error sending the results to the server. 
//    Do not refresh this page. Check your internet connection and when it is up again, try sending the results again. ";

var defaults = [
    "Separator", {
        transfer: 350,
        normalMessage: "+",
        errorMessage: "+",
        ignoreFailure: true
    },
    "SeparatorTer", {
        normalTransfer: 350,
        errorTransfer: 1000,
        normalMessage: "Correct!",
        errorMessage: "Wrong!",
        ignoreFailure: false
    },
    "SeparatorBis", {
        normalTransfer: 350,
        errorTransfer: 1000,
        normalMessage: "+",
        errorMessage: "+",
        ignoreFailure: true
    },
    "Scale2", {
        //scaleWidth: 1000,
        scaleHeight: 15,
        handleWidth: 15,
        handleHeight: 40, //-- the width/height of the "handle" which the user slides along the bar.
        //html -- html displayed above the bar (probably specifying the sentence to be rated, in most cases).
        startColor: "#00A0F0",
        endColor: "#00A0F0",
        startValue: 0,
        endValue: 100,
        decimalPlaces: 0,
        scaleLabels: true,
        LeftLab: "← less likely", // ⇦ &#8678; 
        RightLab: "more likely →", // &#8680;" 
    },
    "DashedSentence", {
        mode: "speeded acceptability",
        display: "in place"
    },
    "Message", {
        hideProgressBar: false,
        transfer: "keypress"
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true
    },
];


var items = [



    ["sep", "Separator", { }],
    ["sepFB", "Separator", {normalMessage:"Correct",errorMessage:"Wrong",transfer:1500,ignoreFailure:false}],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["intro", "Form", {
        html: { include: "instructions.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
                
                ["questionnaire", "Form", {
        html: { include: "questionnaire.html" },
        continueMessage: "click here to finish"
    } ],
    
//    ["consent", "Message", {
//         html: { include: "consent.html" },
//         transfer: "click",
//         consentRequired: true,
//         continueMessage: "Click here to start the experiment",
//         consentMessage: "I agree to participate.",
//     } ],


["shape_item01", "Form", {
  html: {include: "item_shape_tall.html"}}],
                
["shape_item02", "Form", {
  html: {include: "item_shape_striped.html"}}],
                
["shape_item03", "Form", {
  html: {include: "item_shape_full.html"}}],
                
["artifact_item04", "Form", {
  html: {include: "item_artifact_tall.html"}}],

["artifact_item05", "Form", {
  html: {include: "item_artifact_striped.html"}}],
                
["artifact_item06", "Form", {
  html: {include: "item_artifact_full.html"}}],


// ["ext1", "Form", {
//   html: {include: "meitem1.html"}}],
//                 
// ["ext2", "Form", {
//   html: {include: "meitem2.html"}}],

                

// ['shape_cube_1', 'Scale2', 
//    {html:"<p class='Sen1'>Imagine you have a <b>cube</b> in front of you. It could be filled with color, or could have nothing in it. </p><p class='Sen2'><i>How likely do you think it is that the cube is like this one?</i></p><br><img height='250' width='250' src='http://lefft.xyz/img/scale_priors/shape/full_cube1.jpg' alt='smthg is wrong :/'>"}],
// ['shape_cube_3', 'Scale2', 
//    {html:"<p class='Sen1'>Imagine you have a <b>cube</b> in front of you. It could be filled with color, or could have nothing in it. </p><p class='Sen2'><i>How likely do you think it is that the cube is like this one?</i></p><br><img height='250' width='250' src='http://lefft.xyz/img/scale_priors/shape/full_cube3.jpg' alt='smthg is wrong :/'>"}],
// ['shape_cube_5', 'Scale2', 
//    {html:"<p class='Sen1'>Imagine you have a <b>cube</b> in front of you. It could be filled with color, or could have nothing in it. </p><p class='Sen2'><i>How likely do you think it is that the cube is like this one?</i></p><br><img height='250' width='250' src='http://lefft.xyz/img/scale_priors/shape/full_cube5.jpg' alt='smthg is wrong :/'>"}],
// ['artifact_beer_1', 'Scale2', 
//    {html:"<p class='Sen1'>Imagine you have a <b>glass</b> in front of you. It could be filled with beer, or could have nothing in it. </p><p class='Sen2'><i>How likely do you think it is that the glass is like this one?</i></p><br><img height='250' width='250' src='http://lefft.xyz/img/scale_priors/artifact/full_beer1.jpg ' alt='smthg is wrong :/'>"}],
// ['artifact_beer_3', 'Scale2', 
//    {html:"<p class='Sen1'>Imagine you have a <b>glass</b> in front of you. It could be filled with beer, or could have nothing in it. </p><p class='Sen2'><i>How likely do you think it is that the glass is like this one?</i></p><br><img height='250' width='250' src='http://lefft.xyz/img/scale_priors/artifact/full_beer3.jpg' alt='smthg is wrong :/'>"}],
// ['artifact_beer_5', 'Scale2', 
//    {html:"<p class='Sen1'>Imagine you have a <b>glass</b> in front of you. It could be filled with beer, or could have nothing in it. </p><p class='Sen2'><i>How likely do you think it is that the glass is like this one?</i></p><br><img height='250' width='250' src='http://lefft.xyz/img/scale_priors/artifact/full_beer5.jpg' alt='smthg is wrong :/'>"}]                  
                
 ];



// TIM NOTES AREA: 
// 
// > **MX:** to elicit item specific priors, here is one possibility:
// "Imagine you have a cube in front of you. It could be filled with color or have nothing in it. How likely do you think you will see a cube like this one?" (we present just one out of the 5 tokens from the same scale)
// "Imagine you have a boat in front of you. It could come in different sizes. How likely do you think you will see a boat like this one?"
// 
// - we can use a sliding bar to get the judgments. The problem with this that it doesn't seem to me that the percentages we get in the end for the 5 tokens on the same scale will add up to 1. So the alternative is to ask:
// - "Imagine you will see a cube in front of you. It could be filled with color or have nothing in it. Which one among the following do you think it will be?" (give them the 5 tokens and they pick one)
// - this will make sure the ultimate proportions will add up to 1. But this way of asking doesn't distinguish the antonyms, like tall-short, empty-full. After a second thought, I dont think the priors should not make a distinction between tall vs. short anyway, since it should just about height distributions.
// 
// - "Imagine you will see a cube in front of you. It could be filled with color or have nothing in it. Which one among the following do you think it will be?" (give them the 5 tokens and they pick one)
// - this will make sure the ultimate proportions will add up to 1. But this way of asking doesn't distinguish the antonyms, like tall-short, empty-full. After a second thought, I dont think the priors should not make a distinction between tall vs. short anyway, since it should just about height distributions.

