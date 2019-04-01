<template>
  <div>
    <v-dialog width="400px" v-model="dialog">
      <v-btn dark class="light-blue darken-4" round slot="activator">Редактировать</v-btn>
      <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-card-title>
                <h1 class="text--primary">Редактировать продукт</h1>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-text>
                 <v-text-field
                    name="title" 
                    label="Название" 
                    type="text"
                    v-model="editedTitle"
                  ></v-text-field>
                 <v-textarea
                    name="description" 
                    label="Описание" 
                    type="text"
                    v-model="editedDescription"
                    multi-line
                  ></v-textarea>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="light-blue darken-4" outline @click="onCancel">Отменить</v-btn>
                <v-btn dark color="light-blue darken-4" outline @click="onSave">Сохранить</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['product'],

  data() {
    return {
      dialog: false,
      editedTitle: this.product.title,
      editedDescription: this.product.description,
    }
  },
  methods: {
    onCancel() {
      this.editedTitle = this.product.title 
      this.editedDescription = this.product.description
      this.dialog = false
    },
    onSave() {
      if (this.editedTitle !== '' && this.editedTitle !== '') {
        this.$store.dispatch('updatedProduct', {
          id: this.product.id,
          title: this.editedTitle,
          description: this.editedDescription
        })
        this.dialog = false
      }
    }
  },
}
</script>