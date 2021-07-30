<template>
    <div>
        <v-subheader>Shipping Address</v-subheader>
        <div>
            <v-card flat>
                <v-container>
                    <v-form ref="form" lazy-validation>
                        <v-text-field label="Name" v-model="name" required append-icon="person"></v-text-field>
                        <v-textarea label="Address" v-model="address" required auto-grow rows="3"></v-textarea>
                        <v-text-field label="Phone" v-model="phone" required append-icon="phone"></v-text-field>
                        <v-select v-model="province_id" :items="provinces" item-text="province" item-value="id" label="Province" persistent-hint single-line></v-select>
                        <v-select v-model="city_id" v-if="province_id>0" items="citiesByProvince" item-text="city" item-value="id" label="City" persistent-hint single-line></v-select>
                    </v-form>
                    <v-card-action>
                        <v-btn color="success" dark @click="saveShipping">
                            <v-icon>save</v-icon> &nbsp;
                            Save
                        </v-btn>
                    </v-card-action>
                </v-container>
            </v-card>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default ({
    data () {
        return {
            name: '',
            address: '',
            phone: '',
            province_id: 0,
            city_id: 0,
        }
    },
    compoted: {
        ...mapGetters({
            user : 'auth/user',
            provinces : 'region/provinces',
            cities: 'region/cities',

        }),
        citiesByProvince(){
            let province_id = this.province_id
            return this.cities.filter(function(city){
                if (city.province_id==province_id) return city
            })
        },
    },
    methods: {
        ...mapActions({
            setAlert : 'alert/set',
            setAuth : 'auth/set',
            setProvinces : 'redgion/setProvinces',
            setCities : 'region/setCities',
            setCart : 'cart/set'
        }),
        saveShipping() {
            let formData = new FormData()
            formData.set('name', this.name)
            formData.set('address', this.address)
            formData.set('phone', this.phone)
            formData.set('name', this.name)
            formData.set('name', this.name)
        }
    }
})
</script>
