<script setup lang="ts">
import { cards } from "../cards";
</script>

<template>
    <div class="card-list">
        <div v-for="card in cards" class="row">
            <span model="cards_list">{{ card.word }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.card-list {
    display: flex;
    flex-direction: column;

    .row {
        display: flex;
    }
}
</style>