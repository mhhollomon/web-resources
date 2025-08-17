import { Tooltip } from 'bootstrap';

export default () => ({
    async initToolTips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        tooltipTriggerList.map(tooltipTriggerEl => 
            new Tooltip(tooltipTriggerEl, {
                delay: { show: 1000, hide: 100 }
            })
        )
    },

    clearTagForm(tagData : any) {
        Alpine.store('activeTags', []);
        Alpine.store('tagLogic', "and");
        tagData.sort = "count";
    }
})
