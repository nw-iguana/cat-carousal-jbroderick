function fullsizeImg() {
    $(".thumbnail").on("click", function(event){
        let newSrc = $(this).find('img').attr('src');
        let newAlt = $(this).find('img').attr('alt');
        $(".hero").find('img').attr('src', newSrc).attr('alt', newAlt);
    })
}

$(fullsizeImg);