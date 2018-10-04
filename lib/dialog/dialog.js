class dialog {
    constructor(node) {
        // super(node);

        // this.title = this.root.querySelector('pmd-dialog-title');
    }
    create(opt) {
        const o = {
            title: 'title',
            cancelActionText: 'action',
            acceptActionText: 'action',
            cancelActionHandler: 'fn',
            acceptActionHandler: 'fn',
            content: {
                type: 'select | text',
                items: [
                    { text: 'text' },
                    { text: 'text' },
                ]
            }
        }

        if (opt.title) { this.title.textContent = opt.title };
    }
}

function createDialog(obj) {
    const container = document.createElement('div'); container.classList.add('pmd-dialog');
    const dialog = document.createElement('div'); dialog.classList.add('pmd-dialog-dialog');
    const header = document.createElement('header'); header.classList.add('pmd-dialog-header');
    const title = document.createElement('h3'); title.classList.add('pmd-dialog-title'); title.textContent = obj.title;
    const body = document.createElement('div'); body.classList.add('pmd-dialog-body');
    const footer = document.createElement('footer'); footer.classList.add('pmd-dialog-footer');
    const buttons = document.createElement('div'); buttons.classList.add('pmd-dialog-buttons');

    if (obj.body) {
        for (let t of obj.body) {
            const a = document.createElement('div');
            a.textContent = t;
            body.appendChild(a);
        }
    }
    if (obj.actions) {
        for (let o of obj.actions) {
            const b = document.createElement('button'); b.classList.add('pmd-button'); b.classList.add('pmd-button-flat'); b.classList.add('pmd-dialog-footer-button--accept'); b.textContent = o.text;
            if (o.action) { b.addEventListener('click', e => o.action(e)) }
            b.addEventListener('click', e => this.remove());
            buttons.appendChild(b);
        }
    }

    container.appendChild(dialog);
    dialog.appendChild(header);
    header.appendChild(title);
    dialog.appendChild(body);
    dialog.appendChild(footer);
    footer.appendChild(buttons);

    document.body.appendChild(container);

}
createDialog.remove = function () {
    container.parentNode.removeChild(container);
}

export { dialog, createDialog }
