<?php

echo "<pre>";

if(isset($_POST['sayi'])) {
    $girilen_sayi = intval($_POST['sayi']);

    function islem($girilen_sayi) {
        if($girilen_sayi == "") {
            echo "Boş veri girilemez";
        } else if($girilen_sayi % 3 == 0) {
            echo "{$girilen_sayi} 3'e bölünebilir.";
        } else {
            $en_yakin = $girilen_sayi - ($girilen_sayi % 3);
            echo "{$girilen_sayi} 3'e bölünemez. <br> Bölünebileceği en yakın sayı: {$en_yakin}";
        }
    }

    islem($girilen_sayi);
}

?>
