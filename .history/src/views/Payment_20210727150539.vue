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
        <v-card flat>
            <v-container>
                <v-simple-table>
                    <tr>
                        <td><img src="img/bca.png" alt=""></td>
                        <td>BCA KCP abc No Rek 123</td>
                    </tr>
                    <tr>
                        <td><img src="img/mandiri.png" alt=""></td>
                        <td>BANK MANDIRI KCP xyz No Rek 456</td>
                    </tr>
                </v-simple-table>
            </v-container>
        </v-card>

        <v-subheader></v-subheader>
        
    </div>
</template>