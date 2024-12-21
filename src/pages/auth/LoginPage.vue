<template>
  <q-page-container>
    <q-page
      class="window-height window-width row justify-center items-center custom-background"
    >
      <div class="column">
        <div class="row">
          <h5 class="text-h5 text-bold text-white q-my-md">
            Hey! 👋 
          </h5>
        </div>
        <div class="row">
          <q-card
            square
            bordered
            class="q-pa-lg w-400 custom-card"
          >
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input
                  v-model="loginParameters.username"
                  square
                  filled
                  dense
                  clearable
                  type="email"
                  label="Email"
                  class="rounded"
                />
                <q-input
                  v-model="loginParameters.password"
                  square
                  filled
                  dense
                  clearable
                  type="password"
                  label="Password"
                  class="rounded"
                />
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn
                @click="login()"
                unelevated
                color="primary"
                size="lg"
                class="full-width rounded hover-shadow"
                label="Login"
              />
              <q-btn
                @click="register()"
                unelevated
                color="negative"
                size="lg"
                class="full-width rounded hover-shadow q-ma-sm"
                label="Register"
              />
            </q-card-actions>
            <q-card-section class="text-center q-pa-none text-caption text-grey-7">
              <p>Don't have an account? Click Register!</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth-store';

const loginParameters = ref({
  username: '',
  password: '',
});

const login = () => {
  authStore
    .authenticate(
      loginParameters.value.username,
      loginParameters.value.password
    )
    .then(
      () => {
        router.replace({ name: 'index' });
      },
      (error) => {
        console.log(
          `No Internet, Connection Lost because server not serve!!!\n${error}`
        );
      }
    );
};

const router = useRouter();
const register = () => {
  router.replace({ name: 'register' });
};

const authStore = useAuthStore();
</script>

<style scoped>
.custom-background {
  background: linear-gradient(135deg, #a45bf1, #649dff);
  color: white;
}

.text-white {
  color: #ffffff !important;
}

.custom-card {
  background: #ffffff;
  border-radius: 12px; 
  border-left: 3px solid black; 
  border-bottom: 3px solid black; 
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3); 
  transition: all 0.3s ease-in-out;
}

.custom-card:hover {
  transform: translateY(-3px); 
}

.hover-shadow:hover {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.q-btn {
  font-weight: bold;
}

.q-btn:hover {
  opacity: 0.9;
}
</style>
