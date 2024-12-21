<template>
  <q-page-container>
    <q-page
      class="window-height window-width row justify-center items-center custom-background"
    >
      <div class="column">
        <div class="row">
          <h5 class="text-h5 text-bold text-white q-my-md">
            Welcome! 👋
          </h5>
        </div>
        <div class="row">
          <q-card
            square
            bordered
            class="q-pa-lg w-400 rounded custom-card"
          >
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input
                  v-model="registerParameters.name"
                  square
                  filled
                  dense
                  clearable
                  type="text"
                  label="First Name and Last Name"
                  ref="nameState"
                  :error="nameError.length > 0"
                  :error-message="nameError"
                  class="rounded"
                />
                <q-input
                  v-model="registerParameters.email"
                  square
                  filled
                  dense
                  clearable
                  type="email"
                  label="Email"
                  ref="emailState"
                  :error="emailError.length > 0"
                  :error-message="emailError"
                  class="rounded"
                />
                <q-input
                  v-model="registerParameters.password"
                  square
                  filled
                  dense
                  clearable
                  type="password"
                  label="Password"
                  ref="passwordState"
                  :error="passwordError.length > 0"
                  :error-message="passwordError"
                  class="rounded"
                />
                <q-file
                  v-model="registerParameters.avatar"
                  filled
                  bottom-slots
                  label="Avatar"
                  counter
                  ref="avatarState"
                  :error="avatarError.length > 0"
                  :error-message="avatarError"
                  class="rounded"
                >
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      name="close"
                      @click.stop.prevent="registerParameters.avatar = null"
                      class="cursor-pointer"
                    />
                  </template>
                  <template v-slot:hint>File size must not exceed 5MB</template>
                </q-file>
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn
                @click="register()"
                unelevated
                color="primary"
                size="lg"
                class="full-width rounded hover-shadow"
                label="Register"
              />
              <q-btn
                @click="login()"
                unelevated
                color="negative"
                size="lg"
                class="full-width rounded hover-shadow q-ma-sm"
                label="Login"
              />
            </q-card-actions>
            <q-card-section class="text-center q-pa-none text-caption text-grey-7">
              <p>Already have an account? Click Login!</p>
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
import { User } from 'src/models/user';

const registerParameters = ref({
  name: '',
  email: '',
  password: '',
  avatar: [],
});

const register = () => {
  User.register(
    registerParameters.value.name,
    registerParameters.value.email,
    registerParameters.value.password,
    registerParameters.value.avatar
  )
    .then((response) => {
      if (response.status == 200) {
        setTimeout(() => {
          router.replace({ name: 'login' });
        }, 1000);
      }
    })
    .catch((error) => {
      if (error.response && error.response.data.errors) {
        nameError.value = error.response.data.errors?.name?.toString() ?? '';
        emailError.value = error.response.data.errors?.email?.toString() ?? '';
        passwordError.value =
          error.response.data.errors?.password?.toString() ?? '';
        avatarError.value =
          error.response.data.errors?.avatar?.toString() ?? '';
        setTimeout(() => {
          nameError.value = '';
          emailError.value = '';
          passwordError.value = '';
          avatarError.value = '';
        }, 5000);
      } else {
        console.error('Unexpected error:', error);
      }
    });
};

const router = useRouter();
const login = () => {
  router.replace({ name: 'login' });
};

const nameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const avatarError = ref('');

const nameState = ref(null);
const emailState = ref(null);
const passwordState = ref(null);
const avatarState = ref(null);
</script>

<style scoped>
.custom-background {
  background: linear-gradient(135deg, #649dff,  #a45bf1);
  color: white;
}


.custom-card {
  background: #ffffff;
  border-radius: 12px;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  transition: all 0.3s ease-in-out;
}

.custom-card:hover {
  transform: translateY(-3px);
}

.q-btn {
  font-weight: bold;
}

.q-btn:hover {
  opacity: 0.9;
}
</style>
