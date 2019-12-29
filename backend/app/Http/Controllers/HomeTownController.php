<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeTownController extends Controller {

    public function __construct() {}

    public function index() {
        echo 'this is index method';
    }

    public function store(Request $request) {
        $townName = $request->input('town_name');
        $countryName = $request->input('country_name');
        $countryCode = $request->input('country_code');
        $countryIsoCode = $request->input('iso_country_code');

        var_dump($townName);
    }
}
