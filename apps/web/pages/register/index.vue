<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
</script>

<template>
  <Head title="Register" />
  
  <VRow
    style="min-height: calc(100vh + 10px);"
    class=""
  >
    <VCol
      v-if="!mobile"
      cols="6"
    >
      <div
        class="d-flex flex-column align-center h-100 justify-space-between"
      >
        <div
          class="pt-16"
        >
          <ProfitFirstLogo
            height="270"
          />
        </div>
        
        <div
          class="d-flex flex-column gap-1 mt-n8"
        >
          <div class="d-flex flex-row mb-6">
            <span
              class="text-h3 font-weight-bold"
            >
              Sign up now to
              <div class="d-inline position-relative">
                get
                <Stroke
                  class="position-absolute"
                  style="bottom: -10px; right: -40px;"
                />
              </div>
            </span>
          </div>
          <div
            class="pl-4"
          >
            <VIcon
              class="mr-2"
              color="secondary"
              icon="mdi-check-circle"
            />
            <span>
              The #1 secure platform for Profit First
            </span>
          </div>
          <div
            class="pl-4"
          >
            <VIcon
              class="mr-2"
              color="secondary"
              icon="mdi-check-circle"
            />
            <span>
              Instant financial clarity for your business
            </span>
          </div>
          <div
            class="pl-4"
          >
            <VIcon
              class="mr-2"
              color="secondary"
              icon="mdi-check-circle"
            />
            <span>
              Less than 2 minutes to set up
            </span>
          </div>
          <div
            class="pl-4"
          >
            <VIcon
              class="mr-2"
              color="secondary"
              icon="mdi-check-circle"
            />
            <span>
              Access support from a Profit First Professional
            </span>
          </div>
          <div
            class="pl-4"
          >
            <VIcon
              class="mr-2"
              color="secondary"
              icon="mdi-check-circle"
            />
            <span>
              And a lifetime of profits!!!
            </span>
          </div>
        </div>
        <div
          class="d-flex flex-column align-center justify-center text-subtitle-2"
        >
          <span>
            Brought to you by
          </span>
          <ProfitProLogo />
        </div>
      </div>
    </VCol>
    <VCol
      :cols="mobile ? '12' : '6'"
      class="d-flex flex-column align-center justify-center px-10 bg-grey-200"
    >
      <ProfitFirstLogo
        v-if="mobile"
        height="135"
      />
      <div>
        <div
          class="text-center text-h6 font-weight-bold mb-4"
        >
          Get Started
          <div class="d-inline position-relative">
            Now
            <Stroke
              width="70"
              class="position-absolute"
              style="bottom: -10px; right: -20px;"
            />
          </div>
        </div>
        <UserForm
          :button-attrs="{
            block: true,
            label: 'Sign up',
            color: 'primary',
          }"
        />
        <div
          class="text-center"
        >
          <div class="py-2 text-grey-600 font-weight-semibold">
            OR
          </div>
          <VBtn
            color="primary"
            class="text-decoration-none mb-2"
            block
            density="compact"
            variant="outlined"
          >
            <span>
              Sign up with Google
            </span>
          </VBtn>
          <span
            class="text-caption text-up font-weight-bold"
          >Already have an account?
          </span>
          <NuxtLink
            to="login"
            class="text-primary ms-1 text-caption"
          >
            Sign in
          </NuxtLink>
        </div>
      </div>
    </VCol>
  </VRow>
</template>

