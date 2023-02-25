<script>
export default {
    props: ['tabData']
}

</script>
<template>
    <div class="tab-accordion--mobile">
        <div class="tab-accordion--mobile__items">
            <div class="tab-accordion--mobile__item tab-accordion--mobile__item--active">
                <div class="tab-accordion--mobile__tab" data-target="tab1">
                    Tab 1
                </div>
                <div class="tab-accordion--mobile__content" data-tab="tab1">
                    Content 1
                </div>
            </div>

            <div class="tab-accordion--mobile__item">
                <div class="tab-accordion--mobile__tab" data-target="tab2">
                    Tab 2
                </div>
                <div class="tab-accordion--mobile__content" data-tab="tab2">
                    Content 2
                </div>
            </div>

            <div class="tab-accordion--mobile__item">
                <div class="tab-accordion--mobile__tab" data-target="tab3">
                    Tab 3
                </div>
                <div class="tab-accordion--mobile__content" data-tab="tab3">
                    Content 3
                </div>
            </div>
        </div>
    </div>
</template>