<template>
    <div>
        <v-subheader>Histori Belanja</v-subheader>
        <v-card flat>
            <v-container>
                <v-simple-table>
                    <tbody>
                        <tr v-for="item in items" :key="item.id">
                            <td><br>
                            Invoice: {{ item.Invoice_number }}
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-container>
        </v-card>
    </div>
</template>