function mcq()
{
    var x=document.getElementById('marks');
    var y=document.getElementById('result');
    var i=0;
    if( HYPER_TEXT_MARKUP_LANGUAGE.checked )
        i++;
    if( Web_browser.checked )
        i++;
    if(  body_tag.checked)
        i++;
    if( color.checked )
        i++;
    if( Css.checked )
        i++;
    marks.innerHTML="<b style='Color:green;'>"+i+"/5 </b>";
    result.innerHTML="<b style='Color:red;'>"+i+"/5 </b>";
    if ( i>3)
        result.innerHTML="<b> pass </b>";
    else
    result.innerHTML="<b> fail </b>";
}
