const FORM_BUTTON_SELECTOR = '.form-field-number-button';
const ACTION_INCREMENT = 'increment';
const ACTION_DECREMENT = 'decrement';

function incrementField(targetSelector) {
    let originValue = $(targetSelector).val();

    originValue++;
    $(targetSelector).val(originValue);
}

function decrementField(targetSelector) {
    let originValue = $(targetSelector).val();

    originValue--;
    $(targetSelector).val(originValue);
}

$(FORM_BUTTON_SELECTOR).click(function () {
    const target = '#' + $(this).data('target');
    const action = $(this).data('action');

    switch(action) {
        case ACTION_INCREMENT: incrementField(target);
            break;
        case ACTION_DECREMENT: decrementField(target);
            break;
    }
});
