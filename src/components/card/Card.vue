<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import { Card } from '../../types';
import { addCard, newEmptyCard } from '../../cards';
import Video from "./Video.vue";

const props = defineProps<{
    model: String,
    cardReadOnly: Card | null;
}>();

const card: Ref<Card> = ref(props.model === 'new_card' ? ref(newEmptyCard()) : props.cardReadOnly as Card);
const inputWord: Ref<any> = ref(null);

// Card is revealed
const revealed: Ref<boolean> = ref(false);

function answer(level: 'hard' | 'ok' | 'easy'): void {
    
}

function addNewCard(): void {
    addCard(card.value);
}

function reveal(): void {
    revealed.value = true;
}

onMounted(() => {
    inputWord?.value?.focus();
});
</script>

<template>
    <div class="card">
        <div class="top">
            <input v-if="model === 'new_card'" class="word" ref="inputWord" type="text" v-model="card.word">
            <span v-else-if="!(model === 'guess_fr_to_lsf' && !revealed)" class="word" ref="inputWord" type="text">{{
                card.word }}</span>
        </div>
        <div class="mid">
            <Video v-if="!(model === 'guess_lsf_to_fr' && !revealed)" :card="card" />
            <!-- <div class="left">
            </div>
            <div class="right">
                <input type="text" class="observation" v-model="card.description">
            </div> -->
        </div>
        <div class="bot">
            <template v-if="model === 'new_card'">
                <button class="button-add" @click="addNewCard">Ajouter</button>
            </template>
            <template v-else>
                <button class="button-flip" v-if="!revealed" @click="reveal">Retourner</button>
                <template v-else>
                    <button class="left" @click="() => answer('hard')">
                    </button>
                    <button class="middle" @click="() => answer('ok')">
                    </button>
                    <button class="right" @click="() => answer('easy')">
                    </button>
                </template>
            </template>
        </div>
    </div>
</template>

<style coped lang="scss">
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
    height: 100%;
    max-height: 800px;
    background-color: #ccc;
    border-radius: 12px;

    .top {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 72px;

        input {
            cursor: pointer;
            background-color: transparent;
            text-align: center;
        }

        .word {
            margin: 24px;
            font-size: 32px;
        }
    }

    .mid {
        margin: 24px 0px 24px 0px;
        height: calc(100% - 144px);
        display: flex;
        overflow: auto;

        .left {
            display: flex;
            flex-direction: column;
            width: 50%;
            height: 100%;
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 100%;
        }
    }

    .bot {
        display: flex;
        height: 72px;

        .button-add {
            width: 100%;
        }

        .button-flip {
            width: 100%;
        }

        .left {
            height: 100%;
            width: 33%;
            background-color: #eaa;
            border-radius: 0px 0px 0px 12px;
        }

        .middle {
            height: 100%;
            width: 34%;
            background-color: #eea;
        }

        .right {
            height: 100%;
            width: 33%;
            background-color: #aea;
            border-radius: 0px 0px 12px 0px;
        }
    }
}
</style>