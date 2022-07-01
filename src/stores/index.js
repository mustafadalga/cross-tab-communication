import { defineStore } from 'pinia'
import { clients } from "@/data";

const store = defineStore({
    id: 'global',
    state: () => ({
        activeClientID: JSON.parse(localStorage.getItem('activeClientID')) || clients[0].id,
        clients: clients
    }),
    getters: {
        getActiveClientID: (state) => state.activeClientID,
        getClients: (state) => state.clients
    },
    actions: {
        changeActiveClientID(activeClientID) {
            this.activeClientID = Number(activeClientID);
            localStorage.setItem('activeClientID',JSON.stringify(this.activeClientID))
        }
    }
})


export default store;