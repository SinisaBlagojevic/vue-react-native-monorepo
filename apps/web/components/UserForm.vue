<script setup>
import {reactive, ref} from 'vue';

const props = defineProps({
  user: {
    type: Object,
    default: () => ({}),
  },
  buttonAttrs: {
    type: Object,
    default: () => ({}),
  },
});

const isPasswordVisible = ref(false);
const isPasswordConfirmVisible = ref(false);
const agreeTerms = ref(false);
let showModal = ref(false);
let currentPdf = ref('');

const userForm = reactive({
  email: '',
  password: '',
  password_confirmation: '',
});

const openPdf = (pdfFile) => {
  currentPdf.value = pdfFile;
  showModal.value = true;
};

</script>
<template>
  <VRow
    class="pa-0 my-0"
  >
    <VCol
      cols="12"
      class="py-0"
    >
      <VTextField
        v-model="userForm.email"
        class="mb-1"
        color="primary"
        bg-color="white"
        density="compact"
        prepend-inner-icon="mdi-account-outline"
        label="Email*"
        placeholder="Email"
        variant="outlined"
      />
    </VCol>
    <VCol
      cols="12"
      class="py-0"
    >
      <VTextField
        v-model="userForm.password"
        class="mb-1"
        color="primary"
        bg-color="white"
        density="compact"
        label="Password*"
        autocomplete="on"
        :type="isPasswordVisible ? 'text' : 'password'"
        prepend-inner-icon="mdi-lock-outline"
        :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
        variant="outlined"
        @click:append-inner="isPasswordVisible = !isPasswordVisible"
      />
    </VCol>
    <VCol
      cols="12"
      class="py-0"
    >
      <VTextField
        v-model="userForm.password_confirmation"
        class="mb-1"
        color="primary"
        bg-color="white"
        density="compact"
        label="Password Confirm*"
        autocomplete="on"
        :type="isPasswordConfirmVisible ? 'text' : 'password'"
        prepend-inner-icon="mdi-lock-outline"
        :append-inner-icon="isPasswordConfirmVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
        variant="outlined"
        @click:append-inner="isPasswordConfirmVisible = !isPasswordConfirmVisible"
      />
    </VCol>
    <VCol
      cols="11"
      class="text-center d-flex align-start"
    >
      <VCheckbox
        v-model="agreeTerms"
        class="align-self-start mt-n2"
        hide-details
        color="primary"
      >
        <template #label>
          <span
            class="text-caption"
          >By signing up, I agree to the following <a
            class="text-primary"
            href="#"
            @click.prevent="openPdf('terms_and_service.pdf')"
          >Terms of Service</a> and <a
            class="text-primary"
            href="#"
            @click.prevent="openPdf('profit_pro_policy.pdf')"
          >Privacy Policy, </a>
            as well as our partner<a
            class="text-primary"
            href="https://www.dwolla.com/legal/dwolla-account-terms-of-service"
          > Dwolla's Terms of Service</a> and <a
            class="text-primary"
            href="https://www.dwolla.com/legal/privacy"
          >Privacy Policy</a>
      </span>
        </template>
      </VCheckbox>
    </VCol>
    <VCol
      cols="12"
      sm="12"
      class="py-0"
    >
      <VBtn
        v-bind="buttonAttrs"
        type="submit"
      >
        {{ buttonAttrs.label ?? 'Save' }}
      </VBtn>
    </VCol>
  </VRow>
<!--  <ModalBasic-->
<!--    v-model="showModal"-->
<!--    :title="currentPdf"-->
<!--    width="800"-->
<!--    @close="showModal = false"-->
<!--  >-->
<!--    <embed-->
<!--      :src="`/${currentPdf}`"-->
<!--      type="application/pdf"-->
<!--      width="100%"-->
<!--      height="600px"-->
<!--    >-->
<!--  </ModalBasic>-->
</template>
