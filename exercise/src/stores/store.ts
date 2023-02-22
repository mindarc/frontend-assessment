import { ref, computed } from "vue";
import { defineStore } from "pinia";
import data from "./data.json";
import { createPinia } from "pinia";
const pinia = createPinia();
export default pinia;
export const useStore = defineStore("exercise", () => {
    const list = ref(data.map((obj, i) => ({ ...obj, isOpen: false })))
    const content = ref(data[0])
    function getConfig() {
        return list.value.map((obj, i) => ({ ...obj, path: obj.title.replace(/\s+/g, '-').toLowerCase() }));
    }

    function clickNavButton(item: any){
        list.value = list.value.map((obj: any, i: any) => ({ ...obj, isOpen: false}))
        const index = list.value.findIndex((x: { title: any; }) => x.title == item.title);
        if (item.isOpen) {
            list.value[index].isOpen = false
            return;
        } else {
            list.value[index].isOpen = true
        }
    }


    return {  getConfig, list, clickNavButton, content };
});
