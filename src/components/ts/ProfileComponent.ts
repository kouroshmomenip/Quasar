import { ref } from 'vue';

const profileTemp = ref({
  modal: false,
  id: 0,
  username: 'kourosh momeni',
  email: 'kouroshmomeni6@gmail.com',
  avatar: '../../../public/images/avatar.png',
  newAvatar: undefined,
  password: 'Aa123456',
  role: 'user',
});

export {profileTemp}
