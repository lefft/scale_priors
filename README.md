### repo for ibex farm expt 
<hr>


### setup steps 

1. run `make_items.r`
2. put contents of `ibex_items.json` into `data` field of `data_includes/scale_priors_data.js`
3. push repo to github
4. sync ibex proj with repo
5. deploy


#### `TODO`


###### item fixes + tweaks 
- [x] fix problem with `full_cube2.jpg` (needs to be colors etc.)
- [x] fix problem w green ovals/circles (wide shd be towards right side)
- [ ] need new points for items: 
> bent (s02), bumpy (s06), curved (s08), full (s09), full (s10), thick (s22), wide (s24)
- [ ] need to swap out image sets (to get diff noun) for items: 
> bent (s02), bumpy (s06), curved (s08), full (s10), thick (s22), wide (s24)

###### after finalizing items 
- [ ] fix small issues here and there 
- [ ] test + inspect 'results' format  
- [ ] write analysis code 
- [ ] run prospective power analysis to get good n 
- [ ] send out for feedback 


###### web/ibex setup stuff 

- [x] require/validate response before allowing continue 
- [x] add generated item json to `scale_priors_data.js` (for prelim)
- [ ] add generated item json to `scale_priors_data.js` (after finalized)
- [ ] add 'consent' after 'intro'
- [ ] create + check consent form 
- [ ] create + check questionnaire 
- [ ] clean up `scale_priors_data.js` (e.g. no practice needed)
- [ ] put prelim version online for testing + feedback 


###### items setup stuff 
- [x] func to take values of `slots`, write an html item 
- [x] func taking item descript, getting appropriate slot values 
- [x] generate items from design params 
- [x] apply func to all of the items (i.e. generate all item `.html`)
- [x] generate + inspect all items (first pass)
- [ ] generate + inspect all items (fully finalized)
- [x] make html template w slots to be filled in 
- [x] get df w nrows equal to number of items 
- [x] write func to inject template w rows of df 
- [x] apply func to all rows of the df 
- [x] put img online 
- [x] put html on ibex 
- [x] write func to generate ibex json object from item spec 
- [x] write json objs for ibex items (first pass)
- [ ] write json objs for ibex items (fully finalized)

###### small/misc 
- [ ] correct long-existing misspellings in fnames?? 
- [ ] update ck/mx on state of thangze 
- [ ] should 'squash' noun be 'gourd'??? 
- [ ] bigger font/underline/emphasis on "**a noun**" in prompt




<br><br>
#### available images + their properties 

###### shape image sets (\* = need to replace with alternative image set)
- **s01**: bent arrow
- **s02**: bent arrow \* [replace w line], [need new scale points]
- **s03**: big square 
- **s04**: big circle 
- **s05**: bumpy square
- **s06**: bumpy square \* [replace w triangle], [need new scale points]
- **s07**: curved line
- **s08**: curved line \* [replace w arrow], [need new scale points]
- **s09**: full cube \* [need new scale points]
- **s10**: full cube \* [replace w cylinder], [need new scale points]
- **s11**: long arrow 
- **s12**: long line 
- **s13**: open circle 
- **s14**: open triangle 
- **s15**: spotted circle 
- **s16**: spotted square 
- **s17**: striped circle 
- **s18**: striped square 
- **s19**: tall cylinder 
- **s20**: tall spiral 
- **s21**: thick arrow 
- **s22**: thick arrow \* [replace w line], [need new scale points]
- **s23**: wide oval
- **s24**: wide oval \* [replace w rectangle], [need new scale points]

###### artifact image sets 
- **a01**: bent nail 
- **a02**: bent bar
- **a03**: big boat
- **a04**: big snowman
- **a05**: bumpy sole
- **a06**: bumpy squash
- **a07**: curved bridge
- **a08**: curved palm
- **a09**: full beer 
- **a10**: full dumpster
- **a11**: long table
- **a12**: long noodle
- **a13**: open chips
- **a14**: open garage
- **a15**: spotted ladybug
- **a16**: spotted pillow
- **a17**: striped fish
- **a18**: striped shirt
- **a19**: tall candle
- **a20**: tall stack
- **a21**: thick marker
- **a22**: thick book
- **a23**: wide bridge
- **a24**: wide couch




### CORRESPONDENCE PASTED MARCH 12 
In this experiment, you will see arrays of objects on the screen. For each array, look at all of the objects, and then choose one. 



```
---5-------------------------------------
Alrighty, sounds like let's go with the "select one" version. 

Just got the other paper off my plate, so I'll put together a final version this weekend and then we can collect. 

-tim 

---4-------------------------------------
On Thu, Mar 1, 2018 at 10:17 PM, ming xiang <mxming@gmail.com> wrote:
Don’t like “typical”. I vote for the first suggestion (“select one” version).

---3-------------------------------------
On Thu, Mar 1, 2018 at 10:14 PM Chris Kennedy <ck@uchicago.edu> wrote:

Agreed about overthinking, but I’m also not crazy about “occur.”  

I think that I actually now believe — or at least almost believe — that we should just say:  “In this experiment, you will see … For each array, select one object.” and leave it at that, so that the subjects don’t overthink!   

But if you guys don’t like that, how about:

“… For each array, select the item that you think is most typical.”

?

---2-------------------------------------
On Feb 28, 2018, at 9:15 PM, ming xiang <mxming@gmail.com> wrote:

not sure if "encounter" is good, but I don't have a better suggestion, here is one possibility. 

global instructions: 
“In this experiment, you will see arrays of objects on the screen.  For each array, choose the object that you think would be most likely to occur.”  

prompt for each trial: 
"Which of these do you think is most likely to occur?"

I am fine with presenting the two kinds of images together.

I would suggest we don't overthink this too much at this point. Let's just set this up and move forward.

ming

---1-------------------------------------
On Wed, Feb 28, 2018 at 2:55 PM, Timothy Leffel <tjleffel@gmail.com> wrote:

But: basically we just need to make some decisions on the points that Chris raised in the last email -- i.e. we need to finalize the language that we will use as a prompt for each item, and also the initial instructions. Once those are done, we will be ready to run subjects (I'll send around a final draft). 

Based on Chris's suggestions, here is one possibility: 

global instructions: 
“In this experiment, you will see arrays of objects on the screen.  For each array, choose the object that you think you would be most likely to encounter.”  

prompt for each trial: 
N/A (no prompt -- just an array of images with radio buttons)


Are you guys okay with doing things that way? If so, let me know. Then we can start collection as soon as this weekend. 

Oh, and one other thing that we discussed earlier in this chain but didn't really settle on: do we want to have separate versions for shape vs artifact? Part of me thinks it would be better to do them all together, so that we have information about how this manipulation affects *individual people's* judgments. But I could imagine arguments for doing shape/artifact between subjects too. 

So, the two decisions that need to be made: 

1. the language we use to specify the task and present items? 
2. shape/artifact between or within subjects? 


What do you guys think? (I'm fine with the above language Chris suggested, and if pushed my preference would be to do shape/artifact within subjects)

-tim
```







```

  mutate(adjs = case_when(
    img_group == "beer" ~ "empty_full", 
    img_group == "bentnail" ~ "straight_bent",
    img_group == "boat" ~ "small_big",
    img_group == "bridge" ~ "narrow_wide",
    img_group == "bw_stripe_fish" ~ "plain_striped",
    img_group == "candle" ~ "short_tall",
    img_group == "chips" ~ "closed_open",
    img_group == "curvedbridge" ~ "straight_curved", # check 
    img_group == "full_beer" ~ "empty_full",
    img_group == "garagedoor" ~ "closed_open",
    img_group == "ladybug" ~ "plain_spotted",
    img_group == "marker" ~ "thin_thick",
    img_group == "noodle" ~ "short_long",
    img_group == "palm" ~ "straight_curved",
    img_group == "pillow" ~ "plain_spotted",
    img_group == "shirt" ~ "plain_striped",
    img_group == "shoe" ~ "smooth_bumpy", # shapes items weird 
    img_group == "snowman" ~ "small_big",
    img_group == "sofa" ~ "narrow_wide",
    img_group == "squash" ~ "smooth_bumpy", # shapes items weird 
    img_group == "stack" ~ "short_tall",
    img_group == "straightrod" ~ "straight_bent",
    img_group == "table" ~ "short_long",
    img_group == "thick" ~ "thin_thick",
    img_group == "trash" ~ "empty_full",
    img_group == "bent_bluearrow" ~ "straight_bent",
    img_group == "bent_greenarrow" ~ "straight_bent",
    img_group == "big_redsquare" ~ "small_big",
    img_group == "big_yellowcircle" ~ "small_big",
    img_group == "bumpy_bluesquare" ~ "smooth_bumpy", # or flat  
    img_group == "bumpy_redsquare" ~ "smooth_bumpy", # or flat 
    img_group == "curved_blueline" ~ "straight_curved",
    img_group == "curved_greenline" ~ "straight_curved",
    img_group == "full_cube" ~ "empty_full",
    img_group == "full_greencube" ~ "empty_full",
    img_group == "full_yellowcube" ~ "empty_full",
    img_group == "long_greenarrow" ~ "short_long",
    img_group == "long_greenline" ~ "short_long",
    img_group == "open_bluecircle" ~ "closed_open",
    img_group == "open_redtriangle" ~ "closed_open",
    img_group == "spotted_yellowcircle" ~ "plain_spotted",
    img_group == "spotted_yellowsquare" ~ "plain_spotted",
    img_group == "stripedd_redcircle" ~ "plain_striped", # misspelling 
    img_group == "stripedd_yellowsquare" ~ "plain_striped", # misspelling 
    img_group == "tall_greencylinder" ~ "short_tall",
    img_group == "tall_greenspiral" ~ "short_tall",
    img_group == "thick_bluearrow" ~ "thin_thick",
    img_group == "thick_redarrow" ~ "thin_thick",
    img_group == "wide_greenoval" ~ "narrow_wide",
    img_group == "wide_redoval" ~ "narrow_wide",
    TRUE ~ NA_character_)) %>% 
  mutate(noun = case_when(
    img_group == "beer" ~ "a beer cup", 
    img_group == "bentnail" ~ "a nail",
    img_group == "boat" ~ "a boat",
    img_group == "bridge" ~ "a bridge",
    img_group == "bw_stripe_fish" ~ "a fish",
    img_group == "candle" ~ "a candle",
    img_group == "chips" ~ "a bag of chips",
    img_group == "curvedbridge" ~ "a bridge", # check 
    img_group == "full_beer" ~ "a beer cup",
    img_group == "garagedoor" ~ "a garage door",
    img_group == "ladybug" ~ "a ladybug",
    img_group == "marker" ~ "a marker",
    img_group == "noodle" ~ "a noodle",
    img_group == "palm" ~ "a palm tree",
    img_group == "pillow" ~ "a pillow",
    img_group == "shirt" ~ "a t-shirt",
    img_group == "shoe" ~ "a shoe sole", # shapes items weird 
    img_group == "snowman" ~ "a snowman",
    img_group == "sofa" ~ "a couch",
    img_group == "squash" ~ "a squash", # shapes items weird 
    img_group == "stack" ~ "a stack of books",
    img_group == "straightrod" ~ "a metal bar",
    img_group == "table" ~ "an end table",
    img_group == "thick" ~ "a book",
    img_group == "trash" ~ "a dumpster",
    img_group == "bent_bluearrow" ~ "an arrow",
    img_group == "bent_greenarrow" ~ "an arrow",
    img_group == "big_redsquare" ~ "a square",
    img_group == "big_yellowcircle" ~ "a circle",
    img_group == "bumpy_bluesquare" ~ "a square", # or flat  
    img_group == "bumpy_redsquare" ~ "a square", # or flat 
    img_group == "curved_blueline" ~ "a line",
    img_group == "curved_greenline" ~ "a line",
    img_group == "full_cube" ~ "a cube",
    img_group == "full_greencube" ~ "a cube",
    img_group == "full_yellowcube" ~ "a cube",
    img_group == "long_greenarrow" ~ "an arrow",
    img_group == "long_greenline" ~ "a line",
    img_group == "open_bluecircle" ~ "a circle",
    img_group == "open_redtriangle" ~ "a triangle",
    img_group == "spotted_yellowcircle" ~ "a circle",
    img_group == "spotted_yellowsquare" ~ "a square",
    img_group == "stripedd_redcircle" ~ "a circle", # misspelling 
    img_group == "stripedd_yellowsquare" ~ "a square", # misspelling 
    img_group == "tall_greencylinder" ~ "a cylinder",
    img_group == "tall_greenspiral" ~ "a spiral",
    img_group == "thick_bluearrow" ~ "an arrow",
    img_group == "thick_redarrow" ~ "an arrow",
    img_group == "wide_greenoval" ~ "an oval",
    img_group == "wide_redoval" ~ "an oval",
    TRUE ~ NA_character_)) %>% 

```