<script setup lang="ts">
import { ref, onMounted, toRef } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const username_id = toRef(route.params, 'username_id') // reactive ref to param
const botApiUrl = import.meta.env.VITE_BOT_API_URL ?? 'http://localhost:3001'
const webApiUrl = import.meta.env.VITE_WEB_API_URL ?? 'http://localhost:3000'

const crimeNotes = ref<any[]>([])
const memberdata = ref<any | null>(null)

onMounted(async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/crime-note-members/${username_id.value}`)
        crimeNotes.value = res.data.history || []
    } catch (err) {
        console.error('Error fetching crime note members:', err)
    }

    try {
        const res2 = await axios.get(`${botApiUrl}/members/901068441581146123/${username_id.value}`)
        memberdata.value = res2.data
    } catch (err) {
        console.error('Error fetching member information:', err)
    }
})

function printPage() {
    window.print()
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
}
</script>

<template>
    <div class="w-full flex justify-center">
        <h1 class="m-0 pt-4">
            {{ memberdata?.displayName }}'s Crime Note Table
        </h1>
    </div>
    <div class="px-5 w-full flex justify-end print:hidden py-2">
        <button v-on:click="printPage" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Print🖨️
        </button>
    </div>
    <div class="w-full px-5 overflow-x-auto">
        <table class="w-full bg-light-surface dark:bg-dark-surface rounded-lg shadow-md ">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Reason</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" v-for="crimeNote in crimeNotes"
                    :key="crimeNote.id_note">
                    <td>{{ crimeNote.id_note }}</td>
                    <td>{{ formatDate(crimeNote.date) }}</td>
                    <td>{{ crimeNote.reason }}</td>
                    <td>{{ crimeNote.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
