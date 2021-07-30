Skip to content
Why GitHub? 
Team
Enterprise
Explore 
Marketplace
Pricing 
Search

Sign in
Sign up
KaelXris
/
Bookstore
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Bookstore/src/views/MyOrder.vue
@KaelXris
KaelXris first commit
Latest commit e6f46fb 3 hours ago
 History
 1 contributor
63 lines (63 sloc)  1.77 KB
  
<template>
    <div>
        <v-subheader>Histori Belanja</v-subheader>
        <v-card flat>
            <v-container>
                <v-simple-table>
                    <tbody>
                        <tr v-for="item in items" :key="item.id">
                            <td><br>
                                Invoice: {{ item.invoice_number }}
                                <div class="primary--text title">Rp. {{ item.total_price.toLocaleString('id-ID') }}</div>
                                <small>date: {{ item.updated_at }}. courier: {{ item.courier_service }}</small>
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
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data(){
        return {
            items: [],
        }
    },
    computed: {
        ...mapGetters({
            user : 'auth/user',
        })
    },
    methods: {
        ...mapActions({
            setAlert : 'alert/set',
        }),
    },
    mounted(){
        let config = {
            headers: {
            'Authorization': "Bearer " + this.user.api_token,
            },
        }
        this.axios.get('/my-order', config)
            .then((response) => {
                let {data} = response.data
                this.items = data
            })
            .catch((error) => {
                let {data} = error.response
                this.setAlert({
                    status : true,
                    text : data.message,
                    color : 'error',
                })
            })
    }
}
</script>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete