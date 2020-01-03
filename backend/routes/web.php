<?php

/** GET routes */
$router->get('/town', ['as' => 'getTowns', 'uses' => 'HomeTownController@index']);
$router->get('/town/{id}', ['as' => 'getTown', 'uses' => 'HomeTownController@getTown']);

/** POST routes */
$router->post('/town', ['as' => 'storeTown', 'uses' => 'HomeTownController@store']);

/** DELETE routes */
$router->delete('/town/{id}', ['as' => 'deleteTown', 'uses' => 'HomeTownController@delete']);

/** PUT routes */
$router->put('/town/{id}', ['as' => 'updateTown', 'uses' => 'HomeTownController@update']);