/*
*		Made for React first app
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from "react";
import ReactDOM from "react-dom";
import Task1 from "./tasks/Task1"
import Task2 from "./tasks/Task2"
require('./mock_api.js');
require('./task_1_validator.js');
require('./task_2_validator.js');

(function(window, document) {
	'use strict';

/******************************************************************************
*
*				Task 1
*
******************************************************************************/

	var taskOne = function() {
		var guestListData = [
			{
				'name': 'John Jameson',
			},
			{
				'name': 'Sam Stuarts',
				'customerID': 'VAL3MK0r'
			},
			{
				'name': 'Matt Michaels',
				'email': 'matt@example.com',
				'customerID': 'ABoV42g7'
			}
		];

		ReactDOM.render(
			<Task1 data={guestListData} />,
		  document.getElementById('task-one')
		);
	};



/******************************************************************************
*
*				Task 2
*
******************************************************************************/

	var taskTwo = function() {
		ReactDOM.render(
			<Task2 />,
			document.getElementById('task-two')
		);
	};

	window.onload = function() {
		// open task_1_validator.js, task_2_validator.js and mock_api.js to understand the below:

		// this is how you use our assertions to figure out if your code is solving the problem...
		console.log('Demonstrating how to call assert for each step:');

//
//
//
// TEMPORARY COMMENT - DEBUG PURPOSE
//
//		window.taskOne.validate('exampleAssertPass', {some: 'data'});
//
		try {
			window.taskOne.validate('exampleAssertFail', {some: 'data'});
		} catch (e) {
			console.error(e);
		}

		// this is how you would call the 'APIs'
		console.log('Demonstrating call to example APIs:');
		window.MockAPI.generateVoucherCode('Alan Adams', function(code) {
			console.log('Example voucher code: ', code);
		});

		// run your tasks
		taskOne();
		taskTwo();
	};

}(window, document));
