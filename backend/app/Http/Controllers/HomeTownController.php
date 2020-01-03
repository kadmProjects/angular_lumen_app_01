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
            Log::info('Failed to create the home town in store method: ' . $e);
            $response->status = 'failed';
            $response->msg = 'Failed to create the Home Town';
        }

        return response()->json($response);
    }

    public function getTown($id) {
        $response = new \stdClass();

        try {
            $town = HomeTown::find($id);

            $response->data = $town;
            $response->status = 'success';
            $response->msg = 'Home town retrieved successfully!';
        } catch(\Exception $e) {
            Log::info('Failed to retrieve the home town in getTown method : ' . $e);

            $response->data = null;
            $response->status = 'failed';
            $response->msg = 'Failed to retrieve the Home town';
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
            Log::info('Failed to delete the home town in delete method: ' . $e);

            $response->status = 'failed';
            $response->msg = 'Failed to delete the Home town';
        }

        return response()->json($response);
    }

    public function update(Request $request, $id) {
        $response = new \stdClass();

        try {
            $homeTown = HomeTown::find($id);
            $homeTown->name = $request->input('name');
            $homeTown->country = $request->input('country');
            $homeTown->country_code = $request->input('country_code');
            $homeTown->country_iso_code = $request->input('country_iso_code');
            $homeTown->save();

            $response->status = 'success';
            $response->msg = 'Home town updated successfully!';
        } catch(\Exception $e) {
            Log::info('Failed to retrieve the home town in update method : ' . $e);

            $response->data = null;
            $response->status = 'failed';
            $response->msg = 'Failed to update the Home town';
        }

        return response()->json($response);
    }
}
