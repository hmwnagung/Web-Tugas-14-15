<template>
    <v-card>
        <v-toolbar dark color="primary">
            <v-btn icon dark @click.native="close">
                <v-icon>Close</v-icon>
            </v-btn>
            <v-text-field v-model="keyword" @input="doSearch" hide-details append-icon="mic" text label="Search" prepend-inner-icon="search" solo-inverted ref="txtSearch"></v-text-field>
        </v-toolbar>
        <v-divider></v-divider>
        <v-subheader v-if="keyword.length>0">
            Result search "{{ keyword }}"
        </v-subheader>
        <v-alert :value="item.length==0 && keyword.length>0" color="warning">
            Sorry, but no results were found.
        </v-alert>

        <v-list two-line v-if="items.length>0">
            <template v-for="(item) in items">
                <v-list-item-avatar :key="item.id" @click="close" :to="'/book/'+ item.slug">
                    <img :src="getImage('/books/'+item.cover)">
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-html="item.title">
                    </v-list-item-title>
                </v-list-item-content>
            </template>
        </v-list>
    </v-card>
</template>