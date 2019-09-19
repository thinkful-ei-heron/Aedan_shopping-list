'use strict';

function makeNewItem(str) {
    return `
        <li>
            <span class="shopping-item">${str}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>
    `;
}

function listen() {
    
    $('#js-shopping-list-form').on('click', 'button', e => {
        e.preventDefault();
        let input = $(this).find('#shopping-list-entry');
        if (input.val() !== ''){
            $('.shopping-list').append(makeNewItem(input.val()));
            input.val('');
        }
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', e => {
        let spn = $(e.target).closest('.shopping-item-controls').prev();
        if (spn.hasClass('shopping-item__checked')) {
            spn.removeClass('shopping-item__checked');
        }else spn.addClass('shopping-item__checked');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', e => {
        $(e.target).closest('li').remove();
    });
}

$(listen);