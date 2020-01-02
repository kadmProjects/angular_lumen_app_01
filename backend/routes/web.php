<?php

/** GET routes */
$router->get('/town', ['as' => 'getTown', 'uses' => 'HomeTownController@index']);

/** POST routes */
$router->post('/town', ['as' => 'storeTown', 'uses' => 'HomeTownController@store']);

/** DELETE routes */
$router->delete('/town/{id}', ['as' => 'deleteTown', 'uses' => 'HomeTownController@delete']);