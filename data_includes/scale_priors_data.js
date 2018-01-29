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

// OLD EXAMPLES -- WORKING 
// ["shape_item01", "Form", {
//   html: {include: "item_shape_tall.html"}}],
                
// ["shape_item02", "Form", {
//   html: {include: "item_shape_striped.html"}}],
                
// ["shape_item03", "Form", {
//   html: {include: "item_shape_full.html"}}],
                
// ["artifact_item04", "Form", {
//   html: {include: "item_artifact_tall.html"}}],

// ["artifact_item05", "Form", {
//   html: {include: "item_artifact_striped.html"}}],
                
// ["artifact_item06", "Form", {
//   html: {include: "item_artifact_full.html"}}],


    ["artifact_empty_full_beer", "Form", {html: {include: "artifact_empty_full_beer.html"}}],
    ["artifact_straight_bent_bentnail", "Form", {html: {include: "artifact_straight_bent_bentnail.html"}}],
    ["artifact_small_big_boat", "Form", {html: {include: "artifact_small_big_boat.html"}}],
    ["artifact_narrow_wide_bridge", "Form", {html: {include: "artifact_narrow_wide_bridge.html"}}],
    ["artifact_plain_striped_bw_stripe_fish", "Form", {html: {include: "artifact_plain_striped_bw_stripe_fish.html"}}],
    ["artifact_short_tall_candle", "Form", {html: {include: "artifact_short_tall_candle.html"}}],
    ["artifact_closed_open_chips", "Form", {html: {include: "artifact_closed_open_chips.html"}}],
    ["artifact_straight_curved_curvedbridge", "Form", {html: {include: "artifact_straight_curved_curvedbridge.html"}}],
    ["artifact_closed_open_garagedoor", "Form", {html: {include: "artifact_closed_open_garagedoor.html"}}],
    ["artifact_plain_spotted_ladybug", "Form", {html: {include: "artifact_plain_spotted_ladybug.html"}}],
    ["artifact_thin_thick_marker", "Form", {html: {include: "artifact_thin_thick_marker.html"}}],
    ["artifact_short_long_noodle", "Form", {html: {include: "artifact_short_long_noodle.html"}}],
    ["artifact_straight_curved_palm", "Form", {html: {include: "artifact_straight_curved_palm.html"}}],
    ["artifact_plain_spotted_pillow", "Form", {html: {include: "artifact_plain_spotted_pillow.html"}}],
    ["artifact_plain_striped_shirt", "Form", {html: {include: "artifact_plain_striped_shirt.html"}}],
    ["artifact_smooth_bumpy_shoe", "Form", {html: {include: "artifact_smooth_bumpy_shoe.html"}}],
    ["artifact_small_big_snowman", "Form", {html: {include: "artifact_small_big_snowman.html"}}],
    ["artifact_narrow_wide_sofa", "Form", {html: {include: "artifact_narrow_wide_sofa.html"}}],
    ["artifact_smooth_bumpy_squash", "Form", {html: {include: "artifact_smooth_bumpy_squash.html"}}],
    ["artifact_short_tall_stack", "Form", {html: {include: "artifact_short_tall_stack.html"}}],
    ["artifact_straight_bent_straightrod", "Form", {html: {include: "artifact_straight_bent_straightrod.html"}}],
    ["artifact_short_long_table", "Form", {html: {include: "artifact_short_long_table.html"}}],
    ["artifact_thin_thick_thick", "Form", {html: {include: "artifact_thin_thick_thick.html"}}],
    ["artifact_empty_full_trash", "Form", {html: {include: "artifact_empty_full_trash.html"}}],
    ["shape_straight_bent_bent_bluearrow", "Form", {html: {include: "shape_straight_bent_bent_bluearrow.html"}}],
    ["shape_straight_bent_bent_greenarrow", "Form", {html: {include: "shape_straight_bent_bent_greenarrow.html"}}],
    ["shape_small_big_big_redsquare", "Form", {html: {include: "shape_small_big_big_redsquare.html"}}],
    ["shape_small_big_big_yellowcircle", "Form", {html: {include: "shape_small_big_big_yellowcircle.html"}}],
    ["shape_smooth_bumpy_bumpy_bluesquare", "Form", {html: {include: "shape_smooth_bumpy_bumpy_bluesquare.html"}}],
    ["shape_smooth_bumpy_bumpy_redsquare", "Form", {html: {include: "shape_smooth_bumpy_bumpy_redsquare.html"}}],
    ["shape_straight_curved_curved_blueline", "Form", {html: {include: "shape_straight_curved_curved_blueline.html"}}],
    ["shape_straight_curved_curved_greenline", "Form", {html: {include: "shape_straight_curved_curved_greenline.html"}}],
    ["shape_empty_full_full_greencube", "Form", {html: {include: "shape_empty_full_full_greencube.html"}}],
    ["shape_empty_full_full_yellowcube", "Form", {html: {include: "shape_empty_full_full_yellowcube.html"}}],
    ["shape_short_long_long_greenarrow", "Form", {html: {include: "shape_short_long_long_greenarrow.html"}}],
    ["shape_short_long_long_greenline", "Form", {html: {include: "shape_short_long_long_greenline.html"}}],
    ["shape_closed_open_open_bluecircle", "Form", {html: {include: "shape_closed_open_open_bluecircle.html"}}],
    ["shape_closed_open_open_redtriangle", "Form", {html: {include: "shape_closed_open_open_redtriangle.html"}}],
    ["shape_plain_spotted_spotted_yellowcircle", "Form", {html: {include: "shape_plain_spotted_spotted_yellowcircle.html"}}],
    ["shape_plain_spotted_spotted_yellowsquare", "Form", {html: {include: "shape_plain_spotted_spotted_yellowsquare.html"}}],
    ["shape_plain_striped_stripedd_redcircle", "Form", {html: {include: "shape_plain_striped_stripedd_redcircle.html"}}],
    ["shape_plain_striped_stripedd_yellowsquare", "Form", {html: {include: "shape_plain_striped_stripedd_yellowsquare.html"}}],
    ["shape_short_tall_tall_greencylinder", "Form", {html: {include: "shape_short_tall_tall_greencylinder.html"}}],
    ["shape_short_tall_tall_greenspiral", "Form", {html: {include: "shape_short_tall_tall_greenspiral.html"}}],
    ["shape_thin_thick_thick_bluearrow", "Form", {html: {include: "shape_thin_thick_thick_bluearrow.html"}}],
    ["shape_thin_thick_thick_redarrow", "Form", {html: {include: "shape_thin_thick_thick_redarrow.html"}}],
    ["shape_narrow_wide_wide_greenoval", "Form", {html: {include: "shape_narrow_wide_wide_greenoval.html"}}],
    ["shape_narrow_wide_wide_redoval", "Form", {html: {include: "shape_narrow_wide_wide_redoval.html"}}],


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

