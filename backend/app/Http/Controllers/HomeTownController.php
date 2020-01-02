<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\HomeTown;
use Log;

class HomeTownController extends Controller {

    public function __construct() {}

    public function index() {
        return response()->json(HomeTown::all());
    }

    public function store(Request $request) {
        $response = new \stdClass();

        try {
            $homeTown = new HomeTown();
            $homeTown->name = $request->input('name');
            $homeTown->country = $request->input('country');
            $homeTown->country_code = $request->input('country_code');
            $homeTown->country_iso_code = $request->input('country_iso_code');
            $homeTown->save();

            $response->status = 'success';
            $response->msg = 'Home town created successfully!';
        } catch(\Exception $e) {
            Log::info('Failed to create the home town : ' . $e);
            $response->status = 'failed';
            $response->msg = 'Failed to create the Home Town';
        }

        return response()->json($response);
    }

    public function delete($id) {
        $response = new \stdClass();

        try {
            $town = HomeTown::find($id);
            $town->delete();

            $response->status = 'success';
            $response->msg = 'Home town deleted successfully!';
        } catch(\Exception $e) {
            Log::info('Failed to create the home town : ' . $e);

            $response->status = 'failed';
            $response->msg = 'Failed to delete the Home town';
        }

        return response()->json($response);
    }
}
