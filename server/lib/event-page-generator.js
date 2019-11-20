const getMarketPrices = require('./get-market-prices-generator');

const eventPageTemplate = require('../constants/mock-templates/event-page-template.json');
const getMarketPricesTemplate = require('../constants/mock-templates/get-market-prices-template.json');

function getAllIds(array) {
	return array.reduce((accumulator, value) => {
		accumulator.push(value.id);

		return accumulator;
	}, []);
}

function handleCompetitions(competitions) {
	const res = {
		byId: {},
		allIds: [],
	};

	competitions.forEach(competition => {
		const id = competition.id;
		const eventsList = getAllIds(competition.events);

		res.byId[id] = {
			id,
			title: competition.title,
			eventIds: eventsList,
		};
		res.allIds.push(id);
	});

	return res;
}

function handleEventPageMock(data) {
	const competitions = handleCompetitions(data.competitions);

	return {
		competitions,
	};
}

const generateEventPageMock = function(data) {
	// NOTE: event page can only be generated with both responses from event-page strand and SMP (getMarketPrices)
	const response = {
		eventPageMock: null,
		getMarketPricesMock: null,
	};
	console.log('response', response);

	response.eventPageMock = handleEventPageMock(data);
	response.getMarketPricesMock = getMarketPrices.handleGetMarketPricesMock(data);

	console.log('response', response);

	return {
		sucess: 'Generating event page mock',
		eventPageMock: response.eventPageMock,
	};
};

module.exports = {
	generateEventPageMock,
};
