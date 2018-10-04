import * as pmd from '../../lib/pmd.js';

const snackbar = new pmd.snackbar(document.querySelector('#demo-snackbar-main'));

const message = new pmd.textField(document.querySelector('#demo-snackber-message')); message.setValue('Massage');
const action = new pmd.textField(document.querySelector('#demo-snackber-action-text')); action.setValue('ok');

document.querySelector('#show-snackbar').addEventListener('click', e => {
    snackbar.create({
        message: message.getValue(),
        actionText: action.getValue()
    });
});
