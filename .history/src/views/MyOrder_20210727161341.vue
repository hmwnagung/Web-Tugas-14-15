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
                            <div class="primary--text title">Rp. {{ item.total_price.toLocaleString('id-ID') }}</div>
                            <small>date: {{ item.updated_at }}. courier: {{ item.courier_service }}</small><br><br>
                            </td>
                            <td>
                                {{ item.status }}
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-container>
        </v-card>
    </div>
</template>

scrr