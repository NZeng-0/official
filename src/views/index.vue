<script setup>
import {useDevice} from "@/composables";
import { useRouter } from "vue-router";
import axios from "axios";
import {onMounted} from "vue";

const router = useRouter()
const {isMobile} = useDevice()
const mobile = isMobile()

if(mobile){
  router.push('/mobile/index')
}else{
  router.push('/desktop/index')
}
</script>