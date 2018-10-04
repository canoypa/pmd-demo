import * as pmd from '//cano-ypa.github.io/pmd-demo/lib/pmd.js';

document.querySelectorAll('.demo-text-field').forEach(tf => {
    new pmd.textField(tf);
});
