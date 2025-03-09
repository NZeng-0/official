<script setup>
import {useDevice} from "@/composables";
import { useRouter } from "vue-router";

const router = useRouter()
const {isMobile} = useDevice()
const mobile = isMobile()

if(mobile){
  router.push('/mobile/index')
}else{
  router.push('/desktop/index')
}
</script>