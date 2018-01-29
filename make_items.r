lefftpack::lazy_setup()
source("make_items_functions.r")
# TODO (see `example_data.js` for more issues): 
#   x- func to take values of `slots`, write an html item 
#   x- func taking item descript, getting appropriate slot values 
#   x- generate items from design params 
#   x- apply func to all of the items 
#   x- put online for testing 
# 
### OUTLINE OF WHAT TO DO + HOW TO DO IT 
#  x1.  make html template w slots to be filled in 
#  x2.  get df w nrows equal to number of items 
#  x3.  write func to inject template w rows of df 
#  x4.  apply func to all rows of the df 
#  x5.  put img online 
#  x6.  put html on ibex 
#  x7.  write json objs for ibex items 
#   8.  fix small issues here and there 
#   9.  test + inspect 'results' format  
#  10.  send to ck/ming


img_path <- "~/Google Drive/sandboxxxe/website_repo/img/scale_priors/" 
img_types <- c("artifact", "shape")

item_elements <- lapply(img_types, function(cond){
  dir(paste0(img_path, cond), full.names=TRUE)
}) %>% unlist %>% as_data_frame() %>% set_colnames("img") %>% 
  mutate(img = gsub(img_path, "", img)) %>% 
  tidyr::separate(img, into=c("img_type", "img"), sep="/") %>% 
  mutate(img_group = gsub("\\d\\.jpg", "", img)) %>% 
  mutate(group_element = gsub(".+(\\d)\\.jpg", "\\1", img)) %>% 
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
    img_group == "wide_greencircle" ~ "narrow_wide",
    img_group == "wide_redcircle" ~ "narrow_wide",
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
    img_group == "wide_greencircle" ~ "an oval",
    img_group == "wide_redcircle" ~ "an oval",
    TRUE ~ NA_character_)) %>% 
  mutate(img_id = paste(img_type, adjs, gsub("\\.jpg", "", img), sep="_")) %>% 
  mutate(group_id = paste(img_type, adjs, img_group, sep="_"))


# inspect 
item_elements %>% group_by(adjs) %>% summarize(
  n_conds = lu(img_type)) %>% 
  arrange(desc(n_conds)) %>% 
  print(n=nrow(.))

# create the items 
items <- item_elements %>% select(-group_element, -img, -img_id) %>% unique
items %>% glimpse



logze <- sapply(1:nrow(items), function(idx){
  fill_template(items[idx, ], out_dir="chunk_includes/")
})


sapply(1:nrow(items), function(idx) make_ibex_item_json(items[idx, ])) %>% 
  paste(collapse="\n") %>% writeLines("ibex_items.json")




