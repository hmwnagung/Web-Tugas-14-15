<template>
    <div class="payment">
        <v-subheader>Payment Information</v-subheader>
        <v-card flat>
            <v-container v-if="payment">
                <v-simple-table>
                    <tr><th>Order ID</th><td>{{ payment.order_id }}</td></tr>
                    <tr><th>Invoice Number</th><td>{{ payment.invoice_number }}</td></tr>
                    <tr><th>Total Bill</th><td>Rp. {{ payment.total_price.toLocaleString('id-ID') }}</td></tr>
                </v-simple-table>
            </v-container>
        </v-card>

        <v-subheader>Tranfer To</v-subheader>
        <v-card></v-card>
    </div>
</template>