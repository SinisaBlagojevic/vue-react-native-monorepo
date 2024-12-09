import { ApiService } from 'api-services';

export default defineNuxtPlugin((app) => {
  if (process.client) {
    ApiService.init();
  }
})
