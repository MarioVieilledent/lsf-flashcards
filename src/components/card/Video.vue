<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
import { Card } from '../../types';
import { debounce } from '../../app';

const props = defineProps<{
    card: Card;
}>();

const classes: string[] = ['nm', 'adj', 'v', 'adv', 'nf'];

const videos: Ref<any> = ref(null);

const buildUrlLsfplus = (s: string) => `https://lsfplus.fr/sites/default/files/videos/${s.toLowerCase()}.mp4`;
const buildUrlDicoElix = (s: string, n: string, nb: number) => `https://www.elix-lsf.fr/IMG/mp4/${s}_${n}_1_${nb}.mp4`;

const linksToTry: Ref<string[]> = ref([]);

// Watch for changes in myValue
watch(props.card, (newValue) => {
    loadVideos(newValue.word);
});

const loadVideos = debounce((newValue: string) => {
    videos.value.style.display = 'none';
    linksToTry.value = [];
    setTimeout(() => {
        linksToTry.value.push(buildUrlLsfplus(newValue));
        classes.forEach((_, i) => {
            for (let nb = 1; nb <= 2; nb++) {
                linksToTry.value.push(buildUrlDicoElix(newValue, classes[i], nb));
            }
        });
    }, 100);
    setTimeout(() => {
        checkIfVideoExistAndPlay();
        videos.value.style.display = 'flex';
    }, 800);
});

function checkIfVideoExistAndPlay(): void {
    const videos: HTMLCollectionOf<Element> = document.getElementsByClassName('video');
    Array.prototype.forEach.call(videos, videoElem => {
        if ('networkState' in videoElem) {
            if (videoElem.networkState === 3) {
                videoElem.style.display = 'none';
            } else {
                // videoElem.load();
                videoElem.play();
            }
        }
    });
}

// Load 
loadVideos(props.card.word);
</script>

<template>
    <div class="videos" ref="videos">
        <video v-for="link in linksToTry" class="video" width="400" height="280" controls>
            <source :src="link" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<style class="scss">
.videos {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
}
</style>