var shuffleSequence = seq('consent', 'intro', rshuffle(startsWith('item_')), 'questionnaire', 'exit');

// rshuffle(rshuffle(startsWith('shape_')), rshuffle(startsWith('artifact_')))

var showProgressBar = false;
var pageTitle = "Mechanical Turk Experiment";
// "The results were successfully sent to the server. 
// You can now validate your participation on Mechanical Turk. Thanks!"
var completionMessage = "your results have been submitted -- thank you!"; 
// "There was an error sending the results to the server. 
var completionErrorMessage = "something went wrong"; 

var defaults = [
    "Separator", {
        transfer: 350,
        normalMessage: "+",
        errorMessage: "+",
        ignoreFailure: true
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

    ["consent", "Form", {
        consentRequired: true,
        html: {include: "consent.html"}
    }],

    ["intro", "Form", {
        html: {include: "instructions.html"},
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    }],

    ["questionnaire", "Form", {
        html: {include: "questionnaire.html"},
        continueMessage: "click here to obtain an MTurk validation code"
    }],

    ["exit", "Form", {
        html: {include: "exit.html"},
        continueMessage: "click here to submit your reults!"
    }],


["item_artifact_empty_full_beer", "Form", {html: {include: "item_artifact_empty_full_beer.html"}}],
    ["item_artifact_straight_bent_bentnail", "Form", {html: {include: "item_artifact_straight_bent_bentnail.html"}}],
    ["item_artifact_small_big_boat", "Form", {html: {include: "item_artifact_small_big_boat.html"}}],
    ["item_artifact_narrow_wide_bridge", "Form", {html: {include: "item_artifact_narrow_wide_bridge.html"}}],
    ["item_artifact_plain_striped_bw_stripe_fish", "Form", {html: {include: "item_artifact_plain_striped_bw_stripe_fish.html"}}],
    ["item_artifact_short_tall_candle", "Form", {html: {include: "item_artifact_short_tall_candle.html"}}],
    ["item_artifact_closed_open_chips", "Form", {html: {include: "item_artifact_closed_open_chips.html"}}],
    ["item_artifact_straight_curved_curvedbridge", "Form", {html: {include: "item_artifact_straight_curved_curvedbridge.html"}}],
    ["item_artifact_closed_open_garagedoor", "Form", {html: {include: "item_artifact_closed_open_garagedoor.html"}}],
    ["item_artifact_plain_spotted_ladybug", "Form", {html: {include: "item_artifact_plain_spotted_ladybug.html"}}],
    ["item_artifact_thin_thick_marker", "Form", {html: {include: "item_artifact_thin_thick_marker.html"}}],
    ["item_artifact_short_long_noodle", "Form", {html: {include: "item_artifact_short_long_noodle.html"}}],
    ["item_artifact_straight_curved_palm", "Form", {html: {include: "item_artifact_straight_curved_palm.html"}}],
    ["item_artifact_plain_spotted_pillow", "Form", {html: {include: "item_artifact_plain_spotted_pillow.html"}}],
    ["item_artifact_plain_striped_shirt", "Form", {html: {include: "item_artifact_plain_striped_shirt.html"}}],
    ["item_artifact_smooth_bumpy_shoe", "Form", {html: {include: "item_artifact_smooth_bumpy_shoe.html"}}],
    ["item_artifact_small_big_snowman", "Form", {html: {include: "item_artifact_small_big_snowman.html"}}],
    ["item_artifact_narrow_wide_sofa", "Form", {html: {include: "item_artifact_narrow_wide_sofa.html"}}],
    ["item_artifact_smooth_bumpy_squash", "Form", {html: {include: "item_artifact_smooth_bumpy_squash.html"}}],
    ["item_artifact_short_tall_stack", "Form", {html: {include: "item_artifact_short_tall_stack.html"}}],
    ["item_artifact_straight_bent_straightrod", "Form", {html: {include: "item_artifact_straight_bent_straightrod.html"}}],
    ["item_artifact_short_long_table", "Form", {html: {include: "item_artifact_short_long_table.html"}}],
    ["item_artifact_thin_thick_thick", "Form", {html: {include: "item_artifact_thin_thick_thick.html"}}],
    ["item_artifact_empty_full_trash", "Form", {html: {include: "item_artifact_empty_full_trash.html"}}],
    ["item_shape_straight_bent_bent_bluearrow", "Form", {html: {include: "item_shape_straight_bent_bent_bluearrow.html"}}],
    ["item_shape_straight_bent_bent_greenarrow", "Form", {html: {include: "item_shape_straight_bent_bent_greenarrow.html"}}],
    ["item_shape_small_big_big_redsquare", "Form", {html: {include: "item_shape_small_big_big_redsquare.html"}}],
    ["item_shape_small_big_big_yellowcircle", "Form", {html: {include: "item_shape_small_big_big_yellowcircle.html"}}],
    ["item_shape_smooth_bumpy_bumpy_bluesquare", "Form", {html: {include: "item_shape_smooth_bumpy_bumpy_bluesquare.html"}}],
    ["item_shape_smooth_bumpy_bumpy_redsquare", "Form", {html: {include: "item_shape_smooth_bumpy_bumpy_redsquare.html"}}],
    ["item_shape_straight_curved_curved_blueline", "Form", {html: {include: "item_shape_straight_curved_curved_blueline.html"}}],
    ["item_shape_straight_curved_curved_greenline", "Form", {html: {include: "item_shape_straight_curved_curved_greenline.html"}}],
    ["item_shape_empty_full_full_greencube", "Form", {html: {include: "item_shape_empty_full_full_greencube.html"}}],
    ["item_shape_empty_full_full_yellowcube", "Form", {html: {include: "item_shape_empty_full_full_yellowcube.html"}}],
    ["item_shape_short_long_long_greenarrow", "Form", {html: {include: "item_shape_short_long_long_greenarrow.html"}}],
    ["item_shape_short_long_long_greenline", "Form", {html: {include: "item_shape_short_long_long_greenline.html"}}],
    ["item_shape_closed_open_open_bluecircle", "Form", {html: {include: "item_shape_closed_open_open_bluecircle.html"}}],
    ["item_shape_closed_open_open_redtriangle", "Form", {html: {include: "item_shape_closed_open_open_redtriangle.html"}}],
    ["item_shape_plain_spotted_spotted_yellowcircle", "Form", {html: {include: "item_shape_plain_spotted_spotted_yellowcircle.html"}}],
    ["item_shape_plain_spotted_spotted_yellowsquare", "Form", {html: {include: "item_shape_plain_spotted_spotted_yellowsquare.html"}}],
    ["item_shape_plain_striped_stripedd_redcircle", "Form", {html: {include: "item_shape_plain_striped_stripedd_redcircle.html"}}],
    ["item_shape_plain_striped_stripedd_yellowsquare", "Form", {html: {include: "item_shape_plain_striped_stripedd_yellowsquare.html"}}],
    ["item_shape_short_tall_tall_greencylinder", "Form", {html: {include: "item_shape_short_tall_tall_greencylinder.html"}}],
    ["item_shape_short_tall_tall_greenspiral", "Form", {html: {include: "item_shape_short_tall_tall_greenspiral.html"}}],
    ["item_shape_thin_thick_thick_bluearrow", "Form", {html: {include: "item_shape_thin_thick_thick_bluearrow.html"}}],
    ["item_shape_thin_thick_thick_redarrow", "Form", {html: {include: "item_shape_thin_thick_thick_redarrow.html"}}],
    ["item_shape_narrow_wide_wide_greenoval", "Form", {html: {include: "item_shape_narrow_wide_wide_greenoval.html"}}],
    ["item_shape_narrow_wide_wide_redoval", "Form", {html: {include: "item_shape_narrow_wide_wide_redoval.html"}}]

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

