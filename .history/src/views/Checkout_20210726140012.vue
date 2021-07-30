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

                    </v-form>
                </v-container>
            </v-card>
        </div>
    </div>
</template>