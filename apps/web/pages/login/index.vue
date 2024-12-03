<script setup>
defineProps({
  canResetPassword: {
    type: Boolean,
  },
  status: {
    type: String,
  },
  environment: {
    type: String,
  }
});

const showOTPForm = ref(false);
const isPasswordVisible = ref(false);

</script>

<template>
  <VContainer
    class="d-flex flex-column pb-3 pt-15"
    style="max-width: 500px; min-height: calc(100vh - 16px);"
  >
    <VRow>
      <VCol
        align="center"
        class="d-flex align-center justify-center"
      >
        <ProfitFirstLogo />
      </VCol>
    </VRow>
    <VRow
      class="mb-2"
      no-gutters
    >
      <VCol
        align="center"
      >
        <span
          class="text-h6 font-weight-bold"
        >
          Sign in to your account.
        </span>
      </VCol>
    </VRow>
    <template
      v-if="showOTPForm"
    >
      <VRow>
        <div class="text-subtitle-2 font-weight-light text-center w-100">
          Please enter the verification code sent to: <span class="font-weight-bold"></span>
        </div>
        <VCol
          class="pt-0"
        >
          <VOtpInput
            min-width="100%"
            rounded
            length="6"
            base-color="primary"
          />
        </VCol>
      </VRow>
      <VRow
        no-gutters
      >
        <VCol>
          <VBtn
            color="primary"
            block
            variant="elevated"

          >
            Login
          </VBtn>
        </VCol>
      </VRow>
      <VRow
        no-gutters
      >
        <VCol>
          <VBtn
            color="primary"
            class="text-decoration-none"
            block
            variant="outlined"
            density="compact"
          >
            Resend Code
          </VBtn>
        </VCol>
      </VRow>
    </template>
    <template
      v-else
    >
      <div>
        <VRow
          no-gutters
        >
          <VCol>
            <VTextField
              class="mb-1"
              color="primary"
              prepend-inner-icon="mdi-email-outline"
              label="Email"
              type="email"
              variant="outlined"
              density="compact"
              autofocus
            />
          </VCol>
        </VRow>
        <VRow
          no-gutters
        >
          <VCol>
            <VTextField
       
              class="mb-1"
              color="primary"
              label="Password"
              variant="outlined"
              autocomplete="on"
              density="compact"
              :type="isPasswordVisible ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock-outline"
              :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
              @click:append-inner="isPasswordVisible = !isPasswordVisible"
            />
          </VCol>
        </VRow>
        <VRow
          align="center"
          no-gutters
          class="mb-3"
        >
          <VCol
            cols="6"
          >
            <VCheckbox
              label="Remember me"
              color="primary"
              hide-details
            />
          </VCol>
          <VCol
            cols="6"
            class="text-right"
          >
            <Link
              v-if="canResetPassword"
              class="text-primary"
            >
              Forgot Password?
            </Link>
          </VCol>
        </VRow>
      </div>
      <div>
        <VRow
          no-gutters
        >
          <VCol>
            <VBtn
              color="primary"
              block
              variant="elevated"
            >
              {{ environment === 'production' ? 'Send Code' : 'Login' }}
            </VBtn>
          </VCol>
        </VRow>
        <VRow
          no-gutters
          class="py-2"
        >
          <VCol
            class="text-center"
          >
            <div
              class="text-grey-600 font-weight-semibold"
            >
              OR
            </div>
          </VCol>
        </VRow>
        <VRow
          no-gutters
        >
          <VCol>
            <VBtn
              color="primary"
              class="text-decoration-none mb-2"
              block
              variant="outlined"
              density="compact"
            >
              Log in with Google
            </VBtn>
          </VCol>
        </VRow>
      </div>
    </template>
    
    <VRow>
      <VCol
        class="text-center"
      >
        <span
          class="text-caption text-up font-weight-bold"
        >
          Don't have an account?
        </span>
        <NuxtLink
          to="/register"
          class="text-primary ms-1 text-caption text-decoration-none"
        >
          Create an account
        </NuxtLink>
      </VCol>
    </VRow>
    <VRow
      no-gutters
      align="end"
    >
      <VCol
        align="center"
      >
        <div
          class="d-flex flex-column align-center justify-center text-subtitle-2 mb-n4"
        >
          <span>
            Brought to you by
          </span>
          <ProfitProLogo />
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>

