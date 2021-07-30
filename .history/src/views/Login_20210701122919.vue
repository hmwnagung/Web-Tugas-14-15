<template>
    <v-card>
        <v-toolbar dark color="primary">
            <v-btn icon dark @click="close">
                <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title> Login and Start Shopping!</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container fluid>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="email" :rules="emailRules" label="Email" required append-icon="email"></v-text-field>
                <v-text-field v-model="password" :append-icon="showPassword ? 'visibility' : 'visibility_off'" :rules="passwordRules" :type="showPassword ? 'text' : 'password'" label="Password" hint="At least 6 characters" counter @click:append="showPassword = !showPassword"></v-text-field>
                <div class="text-xs-center">
                    <v-btn color="accent lighten-1" :disabled="!valid" @click="submit">
                        Login
                        <v-icon right dark>lock_open</v-icon>
                    </v-btn>
                </div>
            </v-form>
        </v-container>
    </v-card>
</template>