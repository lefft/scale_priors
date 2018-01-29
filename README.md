### repo for ibex farm expt 
<hr>

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

