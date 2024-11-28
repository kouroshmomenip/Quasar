<template>
    <q-page-container>
      <q-page class="window-height window-width row justify-center items-center auth-background">
        <q-card
                style="border-left: 3px solid black; border-bottom: 3px solid black;" class="q-pa-lg w-400">
            <div class="text-center q-mb-md">
                <h5 class="custom-title">Welcome to Our site!</h5>
            </div>
            <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              v-model="loginParameters.username"
              square
              filled
              clearable
              type="email"
              label="Email"
              class="input-modern"
            />
            <q-input
              v-model="loginParameters.password"
              square
              filled
              clearable
              type="password"
              label="Password"
              class="input-modern"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            @click="login()"
            unelevated
            color="primary"
            size="lg"
            class="full-width modern-btn"
            label="Login"
          />
          <q-btn
            @click="register()"
            unelevated
            color="secondary"
            size="lg"
            class="full-width modern-btn q-mt-sm"
            label="Register"
          />
        </q-card-actions>
      </q-card>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const loginParameters = ref({
  username: '',
  password: '',
});

const login = () => {
  console.log(loginParameters.value.username, loginParameters.value.password);
};

const router = useRouter();
const register = () => {
  router.replace({ name: 'register' });
};
</script>
