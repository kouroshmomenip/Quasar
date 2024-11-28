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
                v-model="registerParameters.name"
                square
                filled
                clearable
                type="text"
                label="Full Name"
                class="input-modern"
              />
              <q-input
                v-model="registerParameters.email"
                square
                filled
                clearable
                type="email"
                label="Email"
                class="input-modern"
              />
              <q-input
                v-model="registerParameters.password"
                square
                filled
                clearable
                type="password"
                label="Password"
                class="input-modern"
              />
              <q-file
                v-model="registerParameters.avatar"
                ref="avatarState"
                filled
                label="Upload Avatar"
                class="input-modern"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              @click="register()"
              unelevated
              color="primary"
              size="lg"
              class="full-width modern-btn"
              label="Register"
            />
            <q-btn
              @click="login()"
              unelevated
              color="secondary"
              size="lg"
              class="full-width modern-btn q-mt-sm"
              label="Login"
            />
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const registerParameters = ref({
    name: '',
    email: '',
    password: '',
    avatar: [],
  });
  
  const register = () => {
    console.log(
      registerParameters.value.name,
      registerParameters.value.email,
      registerParameters.value.password,
      registerParameters.value.avatar
    );
  };
  
  const router = useRouter();
  const login = () => {
    router.replace({ name: 'login' });
  };
  </script>
  