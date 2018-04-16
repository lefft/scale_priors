##################################################
# TODO: 
#   - WRITE DOWN FORMAT OF ITEMS
#   - WRITE DOWN FLOW OF WHOLE THING
#   - SEE WHAT WE GOT
#   - NOTE WHAT NEEDS CHANGED
#   - CHANGE IT
#   - SEND OUT FINAL VERSION
#   - GET CREDS/$$ LIMITS
#   - COLLECT DATA
#   - ANALYZE DATA
##################################################


### session setup -------------------------------------------------------------
lefftpack::lazy_setup()
source("make_items_functions.r")




### input files + paths -------------------------------------------------------

# the location on disk where we'll read image filenames from 
img_path <- file.path("/Users","timothyleffel","Google Drive",
                      "sandboxxxe","website_repo","img","scale_priors")

# subfolders of `img_path` holding the relevant images 
img_types <- c("artifact", "shape")




### output files + paths ------------------------------------------------------

# file with the quasi-json for items (to plug into ibex items js file)
items_json_outname <- "ibex_items.json" # items-dev.json

# folder where we'll pump out the item html files 
item_html_out_dir <- "chunk_includes" # "chunk_includes_dev"




### read in + organize item info ----------------------------------------------

# read in hand-specified item info/attributes
# sapply(item_info, table, useNA="ifany"); head(item_info)
item_info <- left_join(
  read.csv("img_adjs.csv", comment.char="#", as.is=TRUE),
  read.csv("img_nouns.csv", comment.char="#", as.is=TRUE), by="img_group")


# build a df with item info and urls where each image is hosted 
item_elements <- img_types %>% 
  Map(function(it) dir(file.path(img_path, it), full.names=TRUE), .) %>% 
  unlist() %>% 
  as_data_frame() %>% 
  set_colnames("img") %>% 
  mutate(img = gsub(paste0(img_path, "/"), "", img)) %>% 
  tidyr::separate(img, into=c("img_type", "img"), sep="/") %>% 
  mutate(img_group = gsub("\\d\\.jpg", "", img)) %>% 
  mutate(group_element = gsub(".+(\\d)\\.jpg", "\\1", img)) %>% 
  left_join(item_info, by="img_group") %>% 
  mutate(img_id = paste(img_type, adjs, gsub("\\.jpg", "", img), sep="_")) %>% 
  mutate(group_id = paste(img_type, adjs, img_group, sep="_"))


# inspect item attributes (check appropriate n's -- shd be exactly 2 apiece)
item_elements %>% group_by(adjs, rel_abs) %>% summarize(
  n_conds = lu(img_type),
  n_groups = lu(group_id)) %>% 
  ungroup() %>% 
  arrange(desc(n_conds)) %>% 
  print(n=nrow(.))


# organize item attributes in a data frame 
# items %>% glimpse
items <- item_elements %>% select(-group_element, -img, -img_id) %>% unique

# add 'item_' prefix for better randomization in ibex
items$group_id <- paste0("item_", items$group_id)


### generate static html doc for each item ------------------------------------

# generate each item's html from template and row of the items df
# output is an html file with appropriate links and boilerplate text 

# NOTE: the resulting matrix is not really used for anything
ibex_setup_grid <- do.call(rbind, sapply(seq_len(nrow(items)), function(idx){
  fill_template(items[idx, ], 
                out_dir=item_html_out_dir, 
                template_fname="item_template-nonoun.html")}))




### generate quasi-json structure for each item -------------------------------

# generate each item's (quasi-)json representation, to put in ibex data js
sapply(seq_len(nrow(items)), function(idx){
  make_ibex_item_json(items[idx, ], path_from_chunk_includes="")}) %>% 
  paste(collapse="\n\t") %>% 
  paste0("{\n\t", ., "\n}") %>% 
  writeLines(items_json_outname)

# NOTE: just built a set of quasi-json objects, one for each item. like this:
# ["artifact_empty_full_beer", "Form", 
#  {html: 
#    {include: 
#      "artifact_empty_full_beer.html"}}],










### NOTES/SCRATCH AREA --------------------------------------------------------


# replaced this w a Map() at top of pipe chain above 
# lapply(img_types,function(cond)dir(file.path(img_path,cond),full.names=TRUE))
