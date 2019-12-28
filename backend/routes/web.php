<?php

/** GET routes */
$router->get('/town', ['as' => 'getTown', 'uses' => 'HomeTownController@index']);

/** POST routes */
$router->post('/town', ['as' => 'storeTown', 'uses' => 'HomeTownController@store']);
