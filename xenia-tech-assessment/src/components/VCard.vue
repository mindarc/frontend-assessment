<template>
    <div class="card">
        <div class="card-img-container">
            <slot name="card-img" />
        </div>
        <div class="card-content-container">
            <slot name="card-content" />
        </div>
        <div class="card-action-container">
            <slot name="card-action" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.card {
    display: flex;
    flex-direction: column;

    width: var(--card-width);
    height: var(--card-height);
    margin: var(--card-margin);
    padding: var(--card-padding);

    border: 1px solid var(--card-border-color);
    border-radius: var(--border-base-radius);
    background: var(--card-background-color);
    box-sizing: border-box;

    text-align: center;
}

.card-img-container,
.card-content-container {
    margin-bottom: var(--margin-base);
}

.card-img-container {
    width: 285px;
    height: 215px;
}

.card-img-container img {
    width: 285px;
    object-fit: cover;
}

.card-content-container {
    font-size: 1.15em;
    line-height: 1.45;
    text-align: center;
}

.card-action-container {
    margin-top: auto;
}

</style>