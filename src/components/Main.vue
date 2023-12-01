<script setup lang="ts">
import { cards } from "../cards";
import { TypeOfCard } from "../types";
import Card from "./card/Card.vue";
import CardList from "./CardList.vue";
import { Ref, ref } from 'vue';

const currentTab: Ref<TypeOfCard> = ref('guess_lsf_to_fr');

const currentCardIndex: Ref<number> = ref(0);

function randCard(): void {
    currentCardIndex.value = Math.floor(Math.random() * cards.length)
}

// Open one ot the other guess tab
function openGuessTab(): void {
    randCard();
    if (currentTab.value === 'guess_lsf_to_fr') {
        currentTab.value = 'guess_fr_to_lsf';
    } else {
        currentTab.value = 'guess_lsf_to_fr';
    }
}

// Open the list of all cards
function openListTab(): void {
    console.log(cards);
    currentTab.value = 'cards_list';
}

// Open the tab to create a new card
function openAddTab(): void {
    currentTab.value = 'new_card';
}
</script>

<template>
    <div class="all">
        <template v-if="currentTab === 'guess_fr_to_lsf'">
            <Card model="guess_fr_to_lsf" :card-read-only="cards[currentCardIndex]" />
        </template>
        <template v-else-if="currentTab === 'guess_lsf_to_fr'">
            <Card model="guess_lsf_to_fr" :card-read-only="cards[currentCardIndex]" />
        </template>
        <template v-else-if="currentTab === 'new_card'">
            <Card model="new_card" :card-read-only="null"/>
        </template>
        <template v-else-if="currentTab === 'cards_list'">
            <CardList />
        </template>
    </div>
    <div class="button-container">
        <div class="round-button" @click="openGuessTab"><button>?</button></div>
        <div class="round-button" @click="openListTab"><button>≡</button></div>
        <div class="round-button" @click="openAddTab"><button>+</button></div>
    </div>
</template>

<style coped lang="scss">
.all {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.container {
    flex: 1;
    position: relative;
    background-color: #f0f0f0;
    overflow: hidden;
}

.button-container {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: calc(60px * 3 + 20px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .round-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: #6be;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button {
        background-color: transparent;
        font-size: 24px;
        width: 36px;
        height: 36px;
    }

    .round-button:hover {
        background-color: #7cf;
    }
}
</style>