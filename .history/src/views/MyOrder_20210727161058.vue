<template>
    <div>
        <v-subheader>Histori Belanja</v-subheader>
        <v-card flat>
            <v-container>
                <v-simple-table>
                    <tbody>
                        <tr v-for="item in items"></tr>
                    </tbody>
                </v-simple-table>
            </v-container>
        </v-card>
    </div>
</template>