const eventPageTemplate = require("../constants/mock-templates/event-page-template.json");
const getMarketPricesTemplate = require("../constants/mock-templates/get-market-prices-template.json");

const generateEventPageMock = function (data) {
    console.log("data", data);
    console.log("eventPageTemplate", eventPageTemplate);

    return {
        sucess: "Generating event page mock"
    }
};

module.exports = {
    generateEventPageMock
}