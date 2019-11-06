const getMarketPrices = require("./get-market-prices-generator");

const eventPageTemplate = require("../constants/mock-templates/event-page-template.json");
const getMarketPricesTemplate = require("../constants/mock-templates/get-market-prices-template.json");

function handleEventPageMock(data) {
    return {};
}

const generateEventPageMock = function (data) {
    // NOTE: event page can only be generated with both responses from event-page strand and SMP (getMarketPrices)
    const response = {
        eventPageMock: null,
        getMarketPricesMock: null
    };
    console.log("response", response);

    response.eventPageMock = handleEventPageMock(data);
    response.getMarketPricesMock = getMarketPrices.handleGetMarketPricesMock(data);

    console.log("response", response);

    return {
        sucess: "Generating event page mock"
    }
};

module.exports = {
    generateEventPageMock
}