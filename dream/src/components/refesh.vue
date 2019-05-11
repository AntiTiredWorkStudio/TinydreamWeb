<script>
export default {
    name:'refesh',
    beforeRouteEnter(to,from,next){
        console.log(to,from,next)
        next(vm => {
            vm.$router.replace(from.path);
        })
    }
}
</script>
