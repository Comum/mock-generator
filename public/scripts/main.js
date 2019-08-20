const FORM_BUTTON_SELECTOR = '.form-field-number-button';
const FROM_NUMBER_OF_EVENTS_SELECTOR = '#numberOfEvents';
const EVENTS_CONTAINER_SELECTOR = '#events-container';
const CONTAINER_SELECTOR = '.container';
const ACTION_INCREMENT = 'increment';
const ACTION_DECREMENT = 'decrement';
const COMPONENT_COMPETITION = 'competition';

function incrementField(targetSelector) {
    let originalValue = $(targetSelector).val();

    originalValue++;
    $(targetSelector).val(originalValue);
}

function decrementField(targetSelector) {
    let originalValue = $(targetSelector).val();

    if (originalValue > 1) {
        originalValue--;
        $(targetSelector).val(originalValue);
    }
}

$(FORM_BUTTON_SELECTOR).click(function () {
    const target = '#' + $(this).data('target');
    const action = $(this).data('action');
    const component = $(this).data('component');

    switch(action) {
        case ACTION_INCREMENT: incrementField(target);
            break;
        case ACTION_DECREMENT: decrementField(target);
            break;
    }

    switch(component) {
        case COMPONENT_COMPETITION:
            onChangeNumberOfEvents.call($(FROM_NUMBER_OF_EVENTS_SELECTOR)[0]);
            break;
    }
});

$(FROM_NUMBER_OF_EVENTS_SELECTOR).change(onChangeNumberOfEvents);

function onChangeNumberOfEvents() {
    const expectedNumberOfEvents = $(this).val();
    const actualNumberOfEvents = $(EVENTS_CONTAINER_SELECTOR).children().length;

    for (let i = actualNumberOfEvents ; i < expectedNumberOfEvents ; i++) {
        const event = { eventId: i + 1 };
        const path = 'http://localhost:8000';
        let html = new EJS({ url: path + '/partials/event-fields'}).render(event);

        $('.events-container').append(html);
    }

    console.log(expectedNumberOfEvents, actualNumberOfEvents);
}
