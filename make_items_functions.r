item_url <- function(item, elem){
  # assert that we have one value apiece for `img_{type,group}`
  stopifnot(all(nrow(item)==1,
                paste0("img_", c("type","group")) %in% names(item)))
  paste0("http://lefft.xyz/img/scale_priors/", 
         item$img_type, "/", item$img_group, elem, ".jpg")
}

item_to_slots <- function(item, strat=2){
  c(GROUP_ID = item$group_id, 
    A_NOUN = item$noun_indef,
    PL_NOUN = item$noun_pl,
    # IMG_TYPE = item$img_type, 
    IMG_1_JPG = item_url(item, 1), 
    IMG_2_JPG = item_url(item, 2), 
    IMG_3_JPG = item_url(item, 3), 
    IMG_4_JPG = item_url(item, 4), 
    IMG_5_JPG = item_url(item, 5), 
    IMG_1_ID = paste0(item$group_id, 1), 
    IMG_2_ID = paste0(item$group_id, 2), 
    IMG_3_ID = paste0(item$group_id, 3), 
    IMG_4_ID = paste0(item$group_id, 4), 
    IMG_5_ID = paste0(item$group_id, 5), 
    IMG_1_ID_ID = paste0("id_", item$group_id, 1), 
    IMG_2_ID_ID = paste0("id_", item$group_id, 2), 
    IMG_3_ID_ID = paste0("id_", item$group_id, 3), 
    IMG_4_ID_ID = paste0("id_", item$group_id, 4), 
    IMG_5_ID_ID = paste0("id_", item$group_id, 5))
}



inject_html <- function(item, slots, template){
  stopifnot(length(template) == 1)
  html <- template
  for (slot_idx in seq_along(slots)){
    slot <- paste0("\\*\\*\\*", names(slots)[slot_idx], "\\*\\*\\*")
    html <- gsub(slot, as.character(slots[slot_idx]), html)
  }
  return(html)
}


fill_template <- function(item, out_dir){
  outfile <- file.path(out_dir, paste0(item$group_id, ".html"))
  # TODO -- clean up this interface (not that important tho)
  template <- paste(readLines("item_template.html"), collapse="\n") 
  slots <- item_to_slots(item)
  template_filled <- inject_html(item, slots, template)
  if (!is.null(out_dir)){
    writeLines(unlist(strsplit(template_filled, split="\n")), outfile)
  }
  if (file.exists(outfile)){
    message(outfile, " created") 
  } else message("creation of ", outfile, " failed")
  return(list(c(c(outfile=outfile), slots)))
  # return(list(outfile=outfile, slots=slots))
}




# format of a json item is: 
#   ["shape_item01", "Form", {
#     html: {include: "item_shape_tall.html"}}],
make_ibex_item_json <- function(item, path_from_chunk_includes=""){
  paste0('[\"', item$group_id, '\", \"Form\", ',
         '{html: {include: \"', path_from_chunk_includes, # '/', <~~~ for ""! 
         item$group_id, '.html\"}}],')
}




