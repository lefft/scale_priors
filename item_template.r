adjectives <- list( # not used 
  minimum = c(
    "bent", "bumpy", "curved", "open", "spotted",  "striped"),
  maximum = c(
    "closed", "flat", "full", "empty", "plain", "straight"),
  relative = c(
    "long", "short", "big", "small", "tall", "thick", "thin", "wide", "narrow")
)


# template 
item_template <- '
<!-- ***GROUP_ID***    border="1"  -->

<div style="width: 1200px; margin-top:0em;">
<br><br><br>

<center>
<b>Imagine you see ***A_NOUN*** in front of you.
<br><br><br>
Which of the following do you think it will be?</b>
</center>

<br>

<table>

<tr>
<td>
<img src="http://lefft.xyz/img/scale_priors/***IMG_TYPE***/***IMG_1_JPG***" width="200px"/>
</td>
<td>
<img src="http://lefft.xyz/img/scale_priors/***IMG_TYPE***/***IMG_2_JPG***" width="200px" />
</td>
<td>
<img src="http://lefft.xyz/img/scale_priors/***IMG_TYPE***/***IMG_3_JPG***" width="200px" />
</td>
<td>
<img src="http://lefft.xyz/img/scale_priors/***IMG_TYPE***/***IMG_4_JPG***" width="200px" />
</td>
<td>
<img src="http://lefft.xyz/img/scale_priors/***IMG_TYPE***/***IMG_5_JPG***" width="200px" />
</td>
</tr>

<tr>
<td style="text-align: center">
<input type="radio" name="***GROUP_ID***" value="***IMG_1_ID***" id="***IMG_1_ID_ID***" class="obligatory">
</td>
<td style="text-align: center">
<input type="radio" name="***GROUP_ID***" value="***IMG_2_ID***" id="***IMG_2_ID_ID***">
</td>
<td style="text-align: center">
<input type="radio" name="***GROUP_ID***" value="***IMG_3_ID***" id="***IMG_3_ID_ID***">
</td>
<td style="text-align: center">
<input type="radio" name="***GROUP_ID***" value="***IMG_4_ID***" id="***IMG_4_ID_ID***">
</td>
<td style="text-align: center">
<input type="radio" name="***GROUP_ID***" value="***IMG_5_ID***" id="***IMG_5_ID_ID***">
</td>
</tr>

</table>

</div>
'

