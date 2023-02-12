<template>
    <h1>
        <slot name="title"></slot>
    </h1>
    <h3>
        <slot name="motto"></slot>
    </h3>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
    color: var(--text-hero);
    font-weight: 600;
    font-size: 3.2em;
    line-height: 1.35;
}

h3 {
    color: var(--text-hero);
    font-size: 1.25em;
    letter-spacing: 1px;
}

@media (min-width: 1024px) {
    h1 {
        font-size: 3.75em;
        line-height: 1.6;
    }

    h3 {
        font-size: 1.7em;
    }
}
</style>
