<template>
    <div>
        <v-subheader>Your Profile</v-subheader>
        <v-card flat>
            <v-container>
                <v-simple-table>
                    <tbody>
                        <tr v-for="(value,key) in user" :key="key"></tr>
                    </tbody>
                </v-simple-table>
            </v-container>
        </v-card>
    </div>
</template>