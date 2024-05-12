<?php

$planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "", "", NULL];

function newArray($arr,$num){
    $filter = array_filter($arr);
    $rand = array_rand($filter,$num);

    $newPlanets = array_map(function($index) use ($filter){
        return $filter[$index];
    },$rand);
    
    return $newPlanets;
};

echo "<pre>";
print_r(newArray($planets,2));
print_r(newArray($planets,5));
print_r(newArray($planets,4));
print_r(newArray($planets,7));

?>