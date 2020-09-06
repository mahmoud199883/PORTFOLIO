

let myoff =$("#myabout").offset().top

$(window).scroll(function()
{
    let myscrollheigt =$(window).scrollTop();
    if(myscrollheigt>=myoff)
    {
        $(".navbar").css("backgroundColor" , "red")
    }
})