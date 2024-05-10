<?php

function ucgen($sayi){
    $ucgenSifir = "";
    for($i=1; $i <= $sayi; $i++){
        $ucgenSifir .= str_repeat("0 ", $i)."<br>";
    };
    return $ucgenSifir;
};

echo ucgen(15);

?>