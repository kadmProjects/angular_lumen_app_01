<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\HomeTown;
use Log;

class HomeTownController extends Controller {

    public function __construct() {}

    public function index() {
        echo 'this is index method';
    }

    public function store(Request $request) {
        $response = new \stdClass();

        try {
            $homeTown = new HomeTown();
            $homeTown->name = $request->input('town_name');
            $homeTown->country = $request->input('country_name');
            $homeTown->country_code = $request->input('country_code');
            $homeTown->country_iso_code = $request->input('iso_country_code');
            $homeTown->save();

            $response->status = 'success';
            $response->msg = 'Home town created successfully!';

        } catch(\Exception $e) {
            Log::info('Failed to create the home town : ' . $e);
            $response->status = 'failed';
            $response->msg = 'Failed to create the Home Town';

        }

        echo json_encode($response);
    }
}
