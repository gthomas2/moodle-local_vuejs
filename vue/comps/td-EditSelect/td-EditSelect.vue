<template>
    <div class="td-edit-select">
        <select class="mr-2" :disabled="this.row.updating" v-model="val" @change="onChange($event)">
            <option
                    v-bind:key="option.value"
                    :value="option.value"
                    v-for="option in opts"

            >{{option.text}}</option>
        </select>
        <!-- TODO - localise aria-label and title -->
        <i class="fa fa-check-circle"
           tabindex="0"
           role="button"
           aria-label="Confirm"
           title="Confirm"
           v-if="changed"
           @click="confirm"
           v-on:keyup.enter="confirm">
        </i>
        <i v-if="this.row.updating" class="fa fa-spinner fa-pulse"></i>
    </div>
</template>
<script>
    export default {
        props: ["value", "field", "row", "xprops", "options"],
        data: function() {
            return {
                val: this.value,
                changed: false,
                // The options.options looks odd but here's an explanation -
                // this.options <- that is just generally optional things that could be passed into
                // any dynamic component - e.g. this.options.disabled = true;
                // this.options.options <- these are the select box options.
                // Capeesh?
                opts: this.options && this.options.options ? this.options.options : null
            };
        },

        updated: function() {
            // Val is a data property local to this child component.
            // However, when the parent component updates the child's data, we need to also update
            // val, providing it hasn't been changed by the child component.
            if (!this.changed) {
                this.val = this.value;
            }
        },

        methods: {
            onChange: function($event) {
                this.changed = true;
            },
            confirm: function() {
                this.changed = false;
                this.xprops.eventbus.$emit('SELECT_CHANGE_CONFIRMED', {row: this.row, val: this.val});
            }
        }
    };
</script>
