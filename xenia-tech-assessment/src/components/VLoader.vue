<template>
    <svg :height="15" :width="15" class="loader" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4" opacity=".3" />
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
            <animateTransform attributeName="transform" dur="0.5s" from="0 16 16" repeatCount="indefinite"
                              to="360 16 16" type="rotate" />
        </path>
    </svg>
</template>

<style>
.loader {
    fill: var(--text-base);
}
</style>